import { useState, useEffect, useCallback } from 'react';

export function useViewportSize() {
  console.log('useViewportSize');
  const getSize = useCallback(() => {
    return { width: window.innerWidth, height: window.innerHeight };
  }, []);

  const [size, setSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize]);

  return size;
}
