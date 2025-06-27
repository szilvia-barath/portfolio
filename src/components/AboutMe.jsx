import { motion } from 'framer-motion';
import cv from '/cv.pdf';

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
      className="px-6 py-20 bg-blackish text-bone md:px-20"
    >
      <motion.h2
        className="mb-8 text-3xl font-thin md:text-5xl text-electric ml-9"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-4xl px-10 mb-5 text-lg text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >I believe the most meaningful work happens between disciplines — where code, culture, language, and design intersect. My background spans frontend development, digital humanities, and language education, driven by the conviction that real knowledge is inherently interdisciplinary.       </motion.p>
 <motion.p
        className="max-w-4xl px-10 mb-10 text-lg text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >I create interfaces and experiences that are  technically precise and culturally and socially impactful at the same time — tools that bridge boundaries, educate, and inspire new perspectives.</motion.p>
      <div className="pl-20 mb-12 ml-20 space-y-8 border-l-2 border-electric">
        {timelineItems.map((item, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute  top-1.5 h-3 w-3" />
            <p className="font-mono text-sm text-bone/80">
              <span className="font-semibold text-bone">{item.year}</span> — {item.label}
            </p>
          </motion.div>
        ))}
              </div>

         <motion.p
        className="max-w-4xl px-10 mb-5 text-lg text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >I’m open to remote roles, creative collaborations, and funded research or PhD opportunities. I work best in inclusive teams that value creativity, flexibility, and curiosity. </motion.p>
          <motion.p
        className="max-w-4xl px-10 mb-5 text-lg text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >Whether through development, research, or creative work, I’m driven to create digital spaces for care, expression, and critical insight.</motion.p>
         <motion.p
        className="max-w-4xl px-10 mb-5 font-thin text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >In the long run, I hope to contribute to projects—academic or applied—that rethink how we engage with language, culture, and technology. </motion.p>


      <motion.h3
        className="px-5 mb-2 text-xl font-semibold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tools that I like
      </motion.h3>

      <div className="flex flex-wrap gap-2 mb-10">
        {tools.map((tool, i) => (
          <motion.span
            key={i}
            className="flex-row px-3 py-3 m-3 font-mono text-sm d-flex text-bone"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {tool}
          </motion.span>
        ))}
      </div>

      <motion.a
        href={cv}
        download
        className="inline-block px-4 py-2 ml-6 font-mono font-bold transition border-l-4 border-x-electric hover:bg-blackish hover:text-electric"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Download CV
      </motion.a>
    </motion.section>
  );
}
