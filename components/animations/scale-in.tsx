'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleIn = ({ 
  children, 
  delay = 0,
  className = '' 
}: ScaleInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        scale: 0.8
      }}
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.8
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};