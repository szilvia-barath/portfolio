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
    onNavClick(id);         // scroll to section
    setIsOpen(false);       // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 z-[1000] w-full bg-[#111] text-bone md:w-20 md:h-screen md:flex md:flex-col md:items-center md:border-r border-b border-bone/20 md:border-b-0">
      {/* Desktop Navigation */}
      <div className="flex-col items-center hidden gap-6 py-6 md:flex">
        <div className="w-8 h-8 rounded-full"><img src="./icon_scott.svg"/></div>
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
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <div className="font-mono text-lg">SB</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#111] px-4 py-6 flex flex-col gap-4 font-mono text-sm border-t border-bone/20 z-[1001]">
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
