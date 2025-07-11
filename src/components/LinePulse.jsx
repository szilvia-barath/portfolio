// LinePulse.jsx
import { motion } from 'framer-motion';

export default function LinePulse() {
  return (
    <motion.div
      className="absolute top-0 bottom-0 z-50 w-1 bg-electric/80 shadow-white"
      initial={{ x: '-10%' }}
      animate={{ x: '110%' }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: 'linear',
      }}
    />
  );
}
