import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  { year: '2015', label: 'BA in English and Portuguese Studies, ELTE & NOVA' },
  { year: '2018', label: 'MA in Language Education (EN & HU), ELTE' },
  { year: '2022', label: 'MA in Digital Humanities and Digital Knowledge, UniBo' },
  { year: '2023', label: 'IT Specialist at Allnet Italia' },
  { year: '2024', label: 'Research Fellow, DARE Project (UniBo)' },
  { year: '2025', label: 'Independent research on Multilingual Artistic Code (MAC)' }
];

const tools = [
  'HTML & CSS', 'JavaScript', 'Vue', 'React', 'TailwindCSS', 'BootStrap', 'GSAP', 'Three.js', 'APIs', 'Github', 'SQL',
  'Webflow', 'WordPress', 'Figma', 'Photoshop', 'Canva', 'Blender', 'ChatGPT', 'LeonardoAI'
];

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full bg-blackish text-bone"
    >
      {/* Intro Section */}
<div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20 text-center sm:px-12">
        <motion.h2 className="mb-6 text-4xl md:text-6xl text-electric poetic-heading">About</motion.h2>
        <p className="max-w-2xl mb-4 text-lg leading-relaxed text-justify">
          I believe the most meaningful work happens between disciplines — where code, culture, language, and design intersect.
        </p>
        <p className="max-w-2xl text-lg leading-relaxed text-justify">
          My background spans frontend development, digital humanities, and language education, convinced that real knowledge is inherently interdisciplinary.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-5 text-left sm:px-5">
        <h3 className="mb-6 text-2xl font-semibold text-electric">Timeline</h3>
        <div className="w-full max-w-md pl-6 space-y-4 border-l border-electric">
          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-sm text-bone/80">
                <span className="font-semibold text-bone">{item.year}</span> — {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20 text-center sm:px-12">
        <p className="max-w-2xl mb-4 text-lg leading-relaxed text-justify">
          I aim to create interfaces and experiences that are technically precise and culturally impactful: tools that bridge boundaries, educate, and inspire.
        </p>
        <p className="max-w-2xl mb-4 text-lg leading-relaxed text-justify">
          I work best in inclusive, flexible teams that value creativity and critical thinking. Whether research or design, I build digital spaces for care and clarity.
        </p>
        <p className="max-w-2xl text-lg font-thin leading-relaxed text-justify">
          In the long run, I want to rethink how we engage with language, culture, and technology  through research, art, and expressive code.
        </p>
      </div>

      {/* Tools Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-5 text-center sm:px-12">
        <h3 className="mb-4 text-xl font-semibold text-electric">Tools I like</h3>
        <div className="flex flex-wrap justify-center max-w-3xl gap-2">
          {tools.map((tool, i) => (
            <motion.span
              key={i}
              className="px-3 py-2 m-1 font-mono text-sm text-bone border-electric tooltip-float"
              data-tooltip="Used in my work"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.03, duration: 0.3 }}
              viewport={{ once: true }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>

      {/* CV Section */}
      <div className="flex items-center justify-center min-h-[60vh] px-6 py-5 sm:px-12">
        <motion.a
          href='/cv.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className="px-6 py-3 font-mono text-lg font-semibold border-l-4 border-electric button-glow hover:bg-blackish hover:text-electric"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          View CV
        </motion.a>
      </div>
    </motion.section>
  );
}
