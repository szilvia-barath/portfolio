/* src/components/Welcome.jsx */
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Welcome() {
  const [message, setMessage] = useState(
    "Thanks for stopping by! Feel free to play around."
  );
  const [duration, setDuration] = useState(0.8);
  const [color, setColor] = useState('#78FFF9');
  const [bgDark, setBgDark] = useState(true);
  const [easing, setEasing] = useState('easeOut');

  const bgClass = bgDark ? 'bg-blackish text-bone' : 'bg-white text-gray-900';

  return (
    <motion.section
      className={`px-6 py-20 md:px-20 left-9 text-center ${bgClass}`}
      initial={{ borderRadius: '1rem' }}
      whileHover={{
        borderRadius: ['1rem', '50% 45% 60% 40%', '1rem'],
        transition: { duration: 1.2, ease: 'easeInOut', repeat: 0 }
      }}
    >
      <motion.h2
        className="mb-4 text-3xl font-thin md:text-5xl"
        style={{ color }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration, ease: easing }}
        viewport={{ once: true }}
      >
        Welcome
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: duration / 2, ease: easing }}
        viewport={{ once: true }}
      >
        <textarea
          aria-label="Welcome message"
          className="w-full bg-transparent resize-none focus:outline-none"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </motion.p>
      <div className="max-w-sm mx-auto mt-8 space-y-4 text-left">
        <label className="flex flex-col">
          <span>Animation Duration: {duration.toFixed(1)}s</span>
          <input
            type="range"
            min="0.1" max="2" step="0.1"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
          />
        </label>
        <label className="flex flex-col">
          <span>Text Color:</span>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={bgDark}
            onChange={() => setBgDark(!bgDark)}
          />
          <span>{bgDark ? 'Dark Background' : 'Light Background'}</span>
        </label>
        <label className="flex flex-col">
          <span>Motion Easing:</span>
          <select value={easing} onChange={(e) => setEasing(e.target.value)}>
            <option value="linear">linear</option>
            <option value="easeIn">easeIn</option>
            <option value="easeOut">easeOut</option>
            <option value="easeInOut">easeInOut</option>
            <option value="anticipate">anticipate</option>
          </select>
        </label>
      </div>
    </motion.section>
  );
}

