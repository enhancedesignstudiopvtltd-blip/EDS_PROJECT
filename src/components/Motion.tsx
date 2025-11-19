import React from 'react';
import { motion, Variants } from 'framer-motion';

const base: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const makeVariant = (type: 'fade' | 'up' | 'left' | 'right' | 'zoom'): Variants => {
  if (type === 'up') return { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
  if (type === 'left') return { hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0 } };
  if (type === 'right') return { hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } };
  if (type === 'zoom') return { hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1 } };
  return base;
};

export const MotionSection: React.FC<React.ComponentProps<typeof motion.section> & {
  variant?: 'fade' | 'up' | 'left' | 'right' | 'zoom';
  stagger?: boolean;
}> = ({ variant = 'up', stagger = false, children, ...rest }) => {
  const v = makeVariant(variant);
  const container: Variants = stagger
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, when: 'beforeChildren' } } }
    : v;

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      variants={container}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export const MotionItem: React.FC<React.ComponentProps<typeof motion.div> & { variant?: 'fade' | 'up' | 'left' | 'right' | 'zoom'; delay?: number }> = ({ variant = 'up', delay = 0, children, ...rest }) => {
  const v = makeVariant(variant);
  return (
    <motion.div variants={v} transition={{ duration: 0.7, ease: 'easeOut', delay }} {...rest}>
      {children}
    </motion.div>
  );
};