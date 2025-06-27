import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animation once mounted
    const timeout = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative flex flex-col items-center justify-center w-full h-screen px-6 py-10 animated-gradient"
    >
      <div className="max-w-xl text-center">
        <h2 className="mb-4 font-mono text-5xl md:text-5xl text-electric">
         Let’s create something meaningful together.
        </h2>
        <p className="mb-8 text-lg text-bone">
If you’re building cultural tools, experimental frontend, or human-centered AI, I’d love to hear from you.
        </p>

        <a
          href="mailto:szilvia.barat@gmail.com"
          className="inline-block px-6 py-3 font-mono text-lg font-semibold transition rounded bg-electric text-blackish hover:bg-white hover:text-black"
        >
          Get in touch
        </a>
      </div>

      <div className="absolute flex gap-6 text-sm bottom-8 text-bone/60">
        <a href="https://github.com/szilvia-barath" target="_blank" rel="noopener noreferrer" className="hover:text-electric">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/szilvia-bar%C3%A1th-630ab717a/" target="_blank" rel="noopener noreferrer" className="hover:text-electric">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/serena.serotonina/" target="_blank" rel="noopener noreferrer" className="hover:text-electric">
          Instagram
        </a>
      </div>
    </motion.footer>
  );
}
