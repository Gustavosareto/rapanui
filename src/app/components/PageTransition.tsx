import { motion } from 'motion/react';
import { ReactNode, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Overlay curtain effect */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ originY: 1 }}
        className="fixed inset-0 z-[100] bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 pointer-events-none"
      />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}