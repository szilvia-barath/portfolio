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
      className="relative flex flex-col justify-center items-center h-screen w-full bg-blackish text-bone px-6 py-10"
    >
      <div className="text-center  max-w-xl">
        <h2 className="text-5xl font-mono md:text-5xl  mb-4 text-electric">
         Let’s create something meaningful together.
        </h2>
        <p className="text-bone  text-lg mb-8">
If you’re building cultural tools, experimental frontend, or human-centered AI, I’d love to hear from you.
        </p>

        <a
          href="mailto:szilvia.barat@gmail.com"
          className="inline-block px-6 py-3 font-mono bg-electric text-blackish rounded hover:bg-white hover:text-black transition text-lg font-semibold"
        >
          Get in touch
        </a>
      </div>

      <div className="absolute bottom-8 flex gap-6 text-sm text-bone/60">
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
