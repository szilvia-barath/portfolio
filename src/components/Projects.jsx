// src/pages/Projects.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    id: 'glucoreflect',
    title: 'Glucoreflect',
    subtitle: 'Biometrics as inner mirror',
    description:
      'A poetic diabetes companion app that helps users reflect on their glucose data, mood, and care routines. Featuring voice input, image upload, and a supportive AI agent, GlucoReflect offers therapeutic insights — not just tracking, but understanding.',
    tech: ['React', 'GSAP', 'ChatGPT API', 'TailwindCSS'],
    keywords: ['health tech', 'soft data', 'biometrics', 'digital twin'],
    thumbnail: '/glucoreflect-hero.jpg',
  },
  {
    id: 'hymn-of-resistance',
    title: 'Hymn of Resistance',
    subtitle: 'An audiovisual protest you can feel',
    description: 'A multisensory web piece that visualizes an emotional, anti-fascist speech through color, vibration, and sound. With hidden history, tagged emotion, and shareable resistance.',
    tech: ['React', 'Canvas', 'WebAudio API'],
    keywords: ['creative coding', 'audio-visual experience', 'synesthesia', 'poetic UI'],
  },
  {
    id: 'ada-lovelace-storytelling',
    title: 'Ada Lovelace Storytelling',
    subtitle: 'Chat with the first programmer',
    description:
      'A feminist-cyberpunk tribute to Ada Lovelace — blending interactive parallax narrative, archival collage, and a mood-shifting AI chatbot. This project reclaims her legacy while exploring how code, gender, and imagination intersect.',
    tech: ['HTML', 'parallax', 'JavaScript', 'CSS', 'motion-viewer', '3d avatar', 'Europeana Archive'],
    keywords: ['history', 'interactive narrative', 'AI chatbot', '3D avatar'],
  },
  {
    id: 'vocabulary-of-resistance',
    title: 'Vocabulary of Resistance',
    subtitle: 'A map of protest words',
    description:
      'An interactive frontend prototype that visualizes the evolving conceptual vocabulary of the Multilingual artist code (MAC). Designed as a semantic map for creative resistance.',
    tech: ['React', 'Framer Motion', 'Unsplash API', 'TailwindCSS', 'Three.js'],
    keywords: ['ethics', 'network', 'linguistics', 'surveillance capitalism', 'MAC'],
  },
  {
    id: 'grammar-of-resistance',
    title: 'Towards a Grammar of Resistance',
    subtitle: 'Creative agency and ethical resistance in the digital economy',
    description:
      'An academic paper outlining the core principles of the Multilingual Artistic Code — exploring resistance through language, code, and post-human culture.',
    tech: [],
    keywords: ['theory', 'interdisciplinary research', 'MAC'],
  },
  {
    id: 'education-of-resistance',
    title: 'Learning to Resist',
    subtitle: 'Education, ethics, and computational literacy in a time of algorithmic dominance',
    description:
      'This upcoming article investigates how education can serve as a site of resistance against extractive, algorithmically governed systems. It questions dominant narratives around “tech literacy” and reframes digital fluency as an ethical, creative, and political practice.',
    tech: [],
    keywords: ['education tech', 'sustainability', 'hybrid learning', 'digital education'],
  },
  {
    id: 'first-cyborgs',
    title: 'The First Cyborgs',
    subtitle: 'An essay on diabetes tech, data, and bodily resistance',
    description:
      'A critical-poetic exploration of how diabetics are made into cyborgs — through smart devices, extractive systems, and silent suffering. Inspired by Donna Haraway, bio-capitalism, and lived experience.',
    tech: [],
    keywords: ['health tech', 'ethical data handling', 'biometrics', 'cyborg', 'digital twin'],
  },
  {
    id: 'brainmap',
    title: 'My Brainmap',
    subtitle: 'Mapping the intangible: a network of my mind',
    description: 'An explorable 3D map of my creative-research practice — where concepts, tools, and works intersect across disciplines, languages, and sensory forms.',
    tech: ['React', 'Canvas', 'WebAudio API'],
    keywords: ['soft data', 'networks', 'digital twin'],
  },
];

export default function Projects() {
  useEffect(() => {
    localStorage.setItem('gridView', true);
  }, []);

  return (
    <section className="relative bg-blackish text-bone min-h-screen py-20">
      <div className="flex items-center justify-between px-10 md:px-20 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-electric">Projects</h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 px-10 grid-cols-1 w-full md:px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.8} className="rounded-xl">
              <Link
                to={`/projects/${proj.id}`}
                className="relative backdrop-filter backdrop-brightness-150 backdrop-blur-md bg-blackish/ hover:bg-white/10 transition-all duration-300 rounded-xl border border-bone/20 hover:border-electric p-6 h-[360px] flex flex-col justify-between overflow-hidden shadow-md"
              >
                <div className="absolute inset-0">
                  <img
                    src={proj.thumbnail}
                    alt={`${proj.title} background`}
                    className="object-cover w-full h-full opacity-10 hover:opacity-30 transition-opacity duration-300"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-mono text-bone/90 mb-1">{proj.title}</h3>
                  <p className="text-sm font-mono text-bone/80 mb-2">{proj.subtitle}</p>
                  <p className="text-sm text-bone/80 line-clamp-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4 text-xs text-blackish font-mono">
                    {proj.tech.map((tool, i) => (
                      <span key={i} className="bg-electric/10 border border-electric/20 px-2 py-1 rounded-full text-electric">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}