import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force disable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Instant scroll to top when route changes - no animation
    window.scrollTo(0, 0);
  }, [pathname]);

  // Also set it once on component mount
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
  }, []);

  return null;
};

export default ScrollToTop;