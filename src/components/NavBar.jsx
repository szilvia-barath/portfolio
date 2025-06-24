import  useTranslation  from '../hooks/useTranslation';
import { translations } from '../data/translations.js';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { lang, setLang } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-[#111] text-bone flex flex-col items-center py-6 z-50 border-r border-bone/20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        {/* Site Logo Placeholder */}
        <div className="w-8 h-8 bg-electric rounded-full" />

        {/* Language Switcher */}
        <div className="flex flex-col gap-2 text-sm">
          {['en', 'hu', 'it'].map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`hover:text-electric transition ${
                lang === code ? 'text-electric font-bold' : 'opacity-60'
              }`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Nav Links */}
        <div className="flex  font-mono  text-left flex-col gap-4  mt-8 text-xs">
          <a href="#hero" className="hover:text-electric">Home</a>
          <a href="#about" className="hover:text-electric">About</a>
          <a href="#projects" className="hover:text-electric">Projects</a>
          <a href="#contact" className="hover:text-electric">Contact</a>
        </div>
      </motion.div>
    </nav>
  );
}
