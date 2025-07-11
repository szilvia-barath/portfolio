import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={mounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 3, ease: 'easeOut' }}
      className="relative flex flex-col items-center justify-center w-screen min-h-screen py-10 text-center animated-gradient"
 >
      <div className="max-w-xl">
        <h2 className="mb-6 font-mono text-3xl sm:text-4xl md:text-5xl text-electric">
          Let’s create something meaningful together.
        </h2>
        <p className="mb-8 text-base sm:text-lg text-bone">
          If you’re building cultural tools, experimental frontend, or human-centered AI, I’d love to hear from you.
        </p>

        <a
          href="mailto:szilvia.barat@gmail.com"
          className="inline-block px-6 py-3 font-mono text-base font-semibold text-white transition sm:text-lg hover:text-electric/90"
        >
          Get in touch
        </a>
      </div>

      <div className="absolute flex flex-wrap justify-center gap-6 px-4 text-sm bottom-8 text-bone/60">
        <a
          href="https://github.com/szilvia-barath"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-electric"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/szilvia-bar%C3%A1th-630ab717a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-electric"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/serena.serotonina/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-electric"
        >
          Instagram
        </a>
      </div>
    </motion.footer>
  );
}
