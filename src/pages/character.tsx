import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@theme/Layout';
import { pageRegistry } from './pageConfig';
import { useHideNavbarFooter } from '../hooks/hideNavAndFooter';

export default function CharacterPage() {
  useHideNavbarFooter();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  
  const pageConfig = pageRegistry[id || ''];

  if (!pageConfig) {
    return <Layout><h1>Page non trouvée</h1></Layout>;
  }

  const Content = pageConfig.component;
  return (
    <Layout title={pageConfig.title} description={pageConfig.description}>
      <Content />
    </Layout>
  );
}