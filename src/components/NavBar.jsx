// src/components/NavBar.jsx
import scottyIcon from '../assets/icon_scott.svg';
import { motion } from 'framer-motion';

export default function Navbar({ active }) {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-[#111] text-bone flex flex-col items-center py-6 z-50 border-r border-fuchsia-500">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <div className="w-8 h-8 overflow-hidden rounded-full">
          <a href="#hero">
            <img
              src={scottyIcon}
              alt="Scotty icon"
              className="object-contain w-full h-full bg-electric/10 hover:bg-electric/90"
            />
          </a>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-8 mt-10 font-mono text-xs text-left">
          <a href="#hero"    className={active === 'hero'    ? 'text-electric font-bold' : 'opacity-60 hover:text-electric'}>Home</a>
          <a href="#about"   className={active === 'about'   ? 'text-electric font-bold' : 'opacity-60 hover:text-electric'}>About</a>
          <a href="#projects" className={active === 'projects'? 'text-electric font-bold' : 'opacity-60 hover:text-electric'}>Projects</a>
          <a href="#gallery" className={active === 'gallery' ? 'text-electric font-bold' : 'opacity-60 hover:text-electric'}>Gallery</a>
          <a href="#contact" className={active === 'contact' ? 'text-electric font-bold' : 'opacity-60 hover:text-electric'}>Contact</a>
        </div>
      </motion.div>
    </nav>
  );
}
