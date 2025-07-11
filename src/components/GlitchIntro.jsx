// src/components/GlitchIntro.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlitchOverlay from './GlitchOverlay';

export default function GlitchIntro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-blackish scanlines glitch-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2.5 }}
    >
      <div className="font-mono text-4xl text-white md:text-6xl glitch-text poetic-heading">
        <span aria-hidden="true">Connecting to mind...</span>
        Connecting to mind...
        <span aria-hidden="true">Connecting to mind... </span>
      </div>
    </motion.div>
  );
}
