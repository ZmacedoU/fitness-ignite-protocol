
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = <T extends HTMLElement>(
  animationClass: string, 
  threshold = 0.1, 
  options: { 
    delay?: number; 
    noInitialHidden?: boolean;
    duration?: number;
    staggerIndex?: number;
    staggerDelay?: number;
  } = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, hasAnimated]);
  
  // Calculate the final delay including staggering effect if applicable
  const finalDelay = options.staggerIndex !== undefined && options.staggerDelay 
    ? options.delay || 0 + (options.staggerIndex * options.staggerDelay)
    : options.delay || 0;
  
  // Build style object
  const style: React.CSSProperties = {};
  
  if (finalDelay) {
    style.transitionDelay = `${finalDelay}ms`;
  }
  
  if (options.duration) {
    style.animationDuration = `${options.duration}ms`;
  }

  return { 
    ref, 
    className: isVisible ? animationClass : options.noInitialHidden ? '' : 'opacity-0',
    style
  };
};
