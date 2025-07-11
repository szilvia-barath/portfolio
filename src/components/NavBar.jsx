import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-[1000] w-full bg-[#111] text-bone md:w-20 md:h-screen md:flex md:flex-col md:items-center md:border-r border-b border-bone/20 md:border-b-0">
      {/* Desktop Navigation */}
      <div className="flex-col items-center hidden gap-6 py-6 md:flex">
        <div className="w-8 h-8 rounded-full bg-electric" />
        <div className="flex flex-col gap-4 mt-8 font-mono text-xs text-left">
          <a href="#hero" className="hover:text-electric">Home</a>
          <a href="#about" className="hover:text-electric">About</a>
          <a href="#projects" className="hover:text-electric">Projects</a>
          <a href="#contact" className="hover:text-electric">Contact</a>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#111] px-4 py-6 flex flex-col gap-4 font-mono text-sm border-t border-bone/20 z-[1001]">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-electric">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-electric">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-electric">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-electric">Contact</a>
        </div>
      )}
    </nav>
  );
}
