// src/pages/Projects.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Ticker from 'framer-motion-ticker';

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
        thumbnail: '/hymn.gif',

  },
  {
    id: 'ada-lovelace-storytelling',
    title: 'Ada Lovelace Storytelling',
    subtitle: 'Chat with the first programmer',
    description:
      'A feminist-cyberpunk tribute to Ada Lovelace — blending interactive parallax narrative, archival collage, and a mood-shifting AI chatbot. This project reclaims her legacy while exploring how code, gender, and imagination intersect.',
    tech: ['HTML', 'parallax', 'JavaScript', 'CSS', 'motion-viewer', '3d avatar', 'Europeana Archive'],
    keywords: ['history', 'interactive narrative', 'AI chatbot', '3D avatar'],
            thumbnail: '/ada.gif',

  },
  {
    id: 'vocabulary-of-resistance',
    title: 'Vocabulary of Resistance',
    subtitle: 'A map of protest words',
    description:
      'An interactive frontend prototype that visualizes the evolving conceptual vocabulary of the Multilingual artist code (MAC). Designed as a semantic map for creative resistance.',
    tech: ['React', 'Framer Motion', 'Unsplash API', 'TailwindCSS', 'Three.js'],
    keywords: ['ethics', 'network', 'linguistics', 'surveillance capitalism', 'MAC'],
      thumbnail: '/vocab.gif',
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
    <section className="relative min-h-screen py-20 text-bone" >
      <div className="px-6 mb-10 md:px-20">
        <h2 className="text-4xl font-light tracking-tight md:text-6xl text-electric">Projects</h2>
      </div>

      <Ticker
  duration={300}
reverse={false}   className="flex gap-12 py-10 whitespace-nowrap"
>
  {projects.map((proj, i) => (
    <div
      key={proj.id}
      className="inline-block min-w-[80vw] md:min-w-[60vw] h-[500px] relative group overflow-hidden rounded-xl shadow-xl"
    >
      <Link to={`/projects/${proj.id}`} className="relative block w-full h-full">
        <img
          src={proj.thumbnail}
          alt={`${proj.title} background`}
          className="absolute inset-0 object-cover w-full h-full transition duration-500 opacity-40 group-hover:opacity-70"
        />
        <div className="absolute inset-0 z-10 " />
        <div className="relative z-20 flex flex-col justify-end h-full p-8">
          <h3 className="mb-2 text-3xl font-thin text-electric drop-shadow">{proj.title}</h3>
          <p className="mb-3 font-mono text-sm text-bone/90">{proj.subtitle}</p>
          <p className="max-w-xl text-sm text-bone/70 line-clamp-3">{proj.description}</p>
          <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
            {proj.tech.map((tool, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-electric text-blackish">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  ))}
</Ticker>

    </section>
  );
}
