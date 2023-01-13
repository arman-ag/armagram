import { useEffect, useState } from 'react';
export const useScreenSize = () => {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  return [width];
};
export default useScreenSize;
