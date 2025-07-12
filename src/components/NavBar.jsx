import { useState } from 'react';

export default function Navbar({ active, onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleClick = (id) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#0e0e0e] text-bone border-b-2 border-b-electric  md:w-20 md:h-screen md:flex md:flex-col md:items-center md:border-b-0">
      {/* Desktop Nav */}
      <div className="flex-col items-center hidden gap-6 py-6 md:flex">
        <div className="w-8 h-8 rounded-full bg-electric/50 hover: animate-pulse"><a href="hero"><img  src="./icon_scott.svg"/></a></div>
        <div className="flex flex-col gap-4 mt-8 font-mono text-xs text-left">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`transition hover:text-electric ${
                active === item.id ? 'text-electric font-bold' : 'text-bone/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b-electric md:hidden">
        <div className="font-mono text-lg"><a href='hero'><img className="w-8 h-8 hover: animate-pulse " src="./icon_scott.svg"/></a></div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >

 <b>┊</b>

        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a2129] px-4 py-6 flex flex-col gap-4 font-mono text-sm  z-[1001]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-left transition hover:text-electric ${
                active === item.id ? 'text-electric font-bold' : 'text-bone/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
