import React from 'react';
import { PAGE_IDS } from '@site/src/pages/pageConfig';

interface PageLinkProps {
  pageId: keyof typeof PAGE_IDS;
  children: React.ReactNode;
}

export function PageLink({ pageId, children }: PageLinkProps) {
  const uuid = PAGE_IDS[pageId];
  return <a href={`/character?id=${uuid}`}>{children}</a>;
}