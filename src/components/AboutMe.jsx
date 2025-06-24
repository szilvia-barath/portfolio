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
      className="bg-blackish text-bone px-6 py-20 md:px-20"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-thin text-electric ml-9 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-4xl text-lg px-10  text-justify mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >I believe the most meaningful work happens between disciplines — where code, culture, language, and design intersect. My background spans frontend development, digital humanities, and language education, driven by the conviction that real knowledge is inherently interdisciplinary.       </motion.p>
 <motion.p
        className="max-w-4xl text-lg px-10 text-justify mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >I create interfaces and experiences that are  technically precise and culturally and socially impactful at the same time — tools that bridge boundaries, educate, and inspire new perspectives.</motion.p>
      <div className="border-l-2 border-electric pl-20 mb-12 ml-20 space-y-8">
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
            <p className="text-sm font-mono text-bone/80">
              <span className="font-semibold text-bone">{item.year}</span> — {item.label}
            </p>
          </motion.div>
        ))}
              </div>

         <motion.p
        className="max-w-4xl text-lg px-10  text-justify mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >I’m open to remote roles, creative collaborations, and funded research or PhD opportunities. I work best in inclusive teams that value creativity, flexibility, and curiosity. </motion.p>
          <motion.p
        className="max-w-4xl text-lg px-10  text-justify mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >Whether through development, research, or creative work, I’m driven to create digital spaces for care, expression, and critical insight.</motion.p>
         <motion.p
        className="max-w-4xl font-thin px-10  text-justify mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >In the long run, I hope to contribute to projects—academic or applied—that rethink how we engage with language, culture, and technology. </motion.p>


      <motion.h3
        className="text-xl px-5 font-semibold mb-2"
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
            className="px-3 py-3 m-3 d-flex flex-row text-bone text-sm font-mono"
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
        className="inline-block px-4 py-2 font-mono font-bold border-l-4 ml-6  border-x-electric hover:bg-blackish hover:text-electric transition"
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
