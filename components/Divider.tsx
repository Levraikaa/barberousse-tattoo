'use client';

import { motion } from 'framer-motion';

/** Trait fin qui se déploie de gauche à droite quand il entre à l'écran. */
export default function Divider() {
  return (
    <motion.div
      aria-hidden="true"
      className="h-px w-full origin-left bg-white/10"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
