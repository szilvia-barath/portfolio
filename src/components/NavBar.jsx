import { motion } from 'framer-motion';
 import scottyIcon from '../assets/icon_scott.svg';


const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ active, onNavClick }) {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-[#111] text-bone flex flex-col items-center py-6 z-50 border-r border-fuchsia-500">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <div className="w-8 h-8 rounded-full">

            <img
                 src={scottyIcon}
              alt="Scotty icon"
              className="object-contain w-full h-full bg-electric/10 hover:bg-electric/90"
            />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-8 mt-10 font-mono text-xs text-left">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onNavClick(id)}
              className={
                id === active
                  ? 'text-electric font-bold focus:outline-none'
                  : 'opacity-60 hover:text-electric focus:outline-none'
              }
            >
              {label}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
