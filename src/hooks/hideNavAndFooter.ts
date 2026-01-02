import { useEffect } from 'react';

export function useHideNavbarFooter() {
  useEffect(() => {
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');
    
    if (navbar) {
      navbar.style.display = 'none';
    }
    if (footer) {
      footer.style.display = 'none';
    }
    
    return () => {
      if (navbar) {
        navbar.style.display = '';
      }
      if (footer) {
        footer.style.display = '';
      }
    };
  }, []);
}