// src/components/Projects.jsx
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import thumbnails so Vite includes them in build
import glucologsImg from '../assets/glucologs-3.png';
import hymnImg from '../assets/hymn.jpg';
import adaImg from '../assets/ada.jpg';
import vocabImg from '../assets/vocab.jpg';
import grammarImg from '../assets/grammar.jpg';
import mindImg from '../assets/mind.jpg';

const projects = [
  {
    id: 'glucologs',
    title: 'Glucologs',
    subtitle: 'A journal for glucose, wellbeing, and ethical data futures',
    description:
      'Glucologs is a conceptual frontend prototype exploring ethical and accessible digital care. It functions as a reflective glucose journal with built-in AI coaching, emphasizing user emotion, voice input, and gentle behavioral nudging. Users can optionally tag and donate their anonymized data for research, shifting health data from surveillance to solidarity.',
    tech: ['React', 'TailwindCSS', 'ChatGPT API', 'GSAP'],
    keywords: ['data ethics', 'poetic UX', 'creative coding', 'frontend prototypes'],
    thumbnail: glucologsImg,
  },
  {
    id: 'hymn-of-resistance',
    title: 'Hymn of Resistance',
    subtitle: 'A multisensory protest in motion and sound',
    description:
      'An experimental digital art piece that translates an anti-fascist speech into a responsive audiovisual experience. Through color pulses, ambient vibration, and synchronized sound, it creates a space where political urgency becomes bodily and emotional. The project acts as both standalone artwork and early prototype for a future VJ plugin.',
    tech: ['React', 'Canvas', 'WebAudio API'],
    keywords: ['creative coding', 'multisensory interface', 'digital protest', 'generative visuals'],
    thumbnail: hymnImg,
  },
  {
    id: 'ada-lovelace-storytelling',
    title: 'Ada Lovelace Storytelling',
    subtitle: 'An archival collage brought to life through code',
    description:
      'An immersive web-based tribute to Ada Lovelace, this project weaves visual storytelling, layered parallax effects, and AI interaction into a speculative interface. Built with digital collage techniques and sourced from the Europeana Archive, it reclaims forgotten histories of women in computing through an aesthetic of glitch, gesture, and poetic computation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'parallax', '3D avatar', 'Europeana Archive'],
    keywords: ['archival media', 'visual storytelling', 'digital humanities'],
    thumbnail: adaImg,
  },
  {
    id: 'vocabulary-of-resistance',
    title: 'Vocabulary of Resistance',
    subtitle: 'Mapping the language of dissent across cultures',
    description:
      'An interactive semantic interface prototype (beta) that visualizes vocabularies tied to resistance. Designed as a frontend experiment in data and cultural nuance, the project uses visual mapping, relational nodes, and image API calls.',
    tech: ['React', 'Framer Motion', 'Three.js', 'TailwindCSS', 'Unsplash API'],
    keywords: ['semantic interface', 'linguistics', 'protest vocabulary', 'MAC'],
    thumbnail: vocabImg,
  },
  {
    id: 'grammar-of-resistance',
    title: 'Toward a Grammar of Resistance',
    subtitle: 'Language, computation, and power in interface design',
    description:
      'A long-form academic article exploring how digital interfaces encode political values. Drawing on critical theory, computational linguistics, and design studies, the paper proposes a grammar for creating culturally rooted, resistant, and decolonial digital systems. This work forms the conceptual basis of the Multilingual Artistic Code framework.',
    tech: [],
    keywords: ['critical design', 'interface theory', 'linguistics', 'MAC'],
    thumbnail: grammarImg,
  },
  {
    id: 'brainmap',
    title: 'My Brainmap',
    subtitle: 'A poetic CV rendered as a system of thought',
    description:
      'Brainmap is an interactive, graph-based visualization of my creative research practice. It maps out the relationships between my ideas, tools, prototypes, and languages — spanning disciplines, media, and modes of thinking. Designed as a poetic self-portrait, it offers an alternative to the traditional résumé: experiential and structurally nonlinear.',
    tech: ['React', 'Canvas', 'WebAudio API'],
    keywords: ['poetic UX', 'creative coding', 'experimental UI', 'frontend prototypes'],
    thumbnail: mindImg,
  },
];

const allTags = Array.from(
  new Set(projects.flatMap((p) => p.keywords))
).sort();

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') return projects;
    return projects.filter((p) => p.keywords.includes(selectedTag));
  }, [selectedTag]);

  return (
    <section className="relative min-h-screen px-20 py-20 bg-blackish text-bone">
      <div className="px-6 mb-10 md:px-20">
        <h2 className="pl-1 text-4xl font-light tracking-tight md:text-6xl text-electric">Projects</h2>
        <p className="pl-1 mt-6 text-sm text-bone/80 md:text-base">Filter by tag:</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 px-20 mb-16 md:px-20">
        <button
          onClick={() => setSelectedTag('All')}
          className={`px-3 py-1 font-mono text-xs rounded-full border ${
            selectedTag === 'All'
              ? 'bg-electric text-blackish border-electric'
              : 'text-bone border-bone/30 hover:border-electric hover:text-electric'
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 font-mono text-xs rounded-full border ${
              selectedTag === tag
                ? 'bg-electric text-blackish border-electric'
                : 'text-bone border-bone/30 hover:border-electric hover:text-electric'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="flex flex-col gap-24 px-6 pl-10 md:px-20">
        <AnimatePresence>
          {filteredProjects.map((proj, i) => (
            <motion.div
              key={proj.id}
              className="grid items-center grid-cols-1 gap-10 pl-6 group md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/projects/${proj.id}`} className="block overflow-hidden shadow-lg rounded-xl">
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="object-contain w-full transition duration-500 h-72 md:h-96 grayscale group-hover:grayscale-0"
                />
              </Link>

              <div className="flex flex-col gap-3">
                <h3 className="relative text-2xl font-light md:text-3xl text-electric">
                  {proj.title}
                  <span className="block mt-1 text-sm italic text-bone/70">{proj.subtitle}</span>
                </h3>
                <p className="text-sm leading-relaxed text-bone/60 max-w-prose">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 font-mono text-xs border rounded-full bg-electric/10 text-electric border-electric/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-2 font-mono text-xs text-bone/60">
                  {proj.keywords.join(' • ')}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
