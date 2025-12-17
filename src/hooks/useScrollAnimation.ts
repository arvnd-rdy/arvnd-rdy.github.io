
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (amount = 0.1, rootMargin = '-50px') => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount, 
    margin: rootMargin as any, // Type assertion to bypass strict typing
    once: true 
  });

  return { ref, isInView };
};
