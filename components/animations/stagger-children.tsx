'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  delayStep?: number;
}

export const StaggerChildren = ({ 
  children, 
  className = '',
  delayStep = 0.1
}: StaggerChildrenProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: delayStep
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};