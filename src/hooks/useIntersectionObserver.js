import { useState, useEffect, useRef, useMemo } from 'react';

export const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  // Memoize options to prevent re-creating observer on each render
  const memoOptions = useMemo(() => options, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, memoOptions);

    const current = elementRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [memoOptions]);

  return [elementRef, isIntersecting];
};
