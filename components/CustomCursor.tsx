'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { studio } from '@/data/studio';

/** Curseur rond qui suit la souris et se contracte au survol des éléments cliquables. */
export default function CustomCursor() {
  const accent = studio.accentColor;
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 800, damping: 35, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 800, damping: 35, mass: 0.5 });

  useEffect(() => {
    // Pas de curseur custom sur les écrans tactiles
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest('a, button, input, textarea, select, [data-cursor-hover]'));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full md:block"
      style={{
        x,
        y,
        width: 40,
        height: 40,
        marginLeft: -20,
        marginTop: -20,
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderColor: '#ffffff',
      }}
      animate={{
        scale: hovering ? 0.5 : 1,
        backgroundColor: hovering ? accent : `${accent}00`,
        borderColor: hovering ? accent : '#ffffff',
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
    />
  );
}
