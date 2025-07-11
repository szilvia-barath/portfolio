// src/components/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';

// Import images from assets so Vite includes them in build
import glucologsImg from '../assets/glucologs-3.png';
import adaImg from '../assets/ada.jpg';
import vocabImg from '../assets/vocab.jpg';
import grammarImg from '../assets/grammar.jpg';
import hymnImg from '../assets/hymn.jpg';
import mindImg from '../assets/mind.jpg';

const projects = {
  glucologs: {
    title: 'Glucologs',
    subtitle: 'A glucose and wellbeing journal designed around care, not compliance',
    description: 'Glucologs is a speculative frontend project that reimagines how we engage with chronic care through emotional design and data ethics. Built as a digital journal for people with diabetes, it integrates voice-to-text input, image uploads, and a conversational AI coach that responds with empathy and encouragement. Users can optionally tag their data and contribute it to research, turning personal health tracking into a form of collective insight. Designed with accessibility and dignity in mind, Glucologs shifts the paradigm from passive monitoring to meaningful reflection.',
    tech: ['React', 'TailwindCSS', 'ChatGPT API', 'GSAP'],
    heroImage: glucologsImg,
    status: 'Under development'
  },

  'ada-lovelace-storytelling': {
    title: 'Ada Lovelace Storytelling',
    subtitle: 'Chat with the first programmer — through archival collage and code',
    description: 'This project is a browser-native experiment in interactive storytelling, designed as a digital monument to Ada Lovelace. Through layered parallax visuals, archival imagery from the Europeana Archive, and an animated 3D avatar, users explore her legacy as both poet and programmer. The interface shifts modes — from speculative fiction to critical computing — as the chatbot adapts its tone and voice. Technically lightweight but visually rich, the piece reclaims erased narratives through code, collage, and conversation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'parallax', '3D avatar', 'Europeana Archive'],
    heroImage: adaImg,
    status: 'https://szilvia-barath.github.io/ada-lovelace/'
  },

  'vocabulary-of-resistance': {
    title: 'Vocabulary of Resistance',
    subtitle: 'A semantic interface exploring protest language across cultures',
    description: 'This project is a beta-stage frontend prototype that maps a vocabulary of resistance. Through interactive graph visualization and dynamic image interpretation, it reveals both the emotional charge and relational depth of language. Built using React and Three.js, the prototype serves as both a speculative design tool and a research interface.',
    tech: ['React', 'Framer Motion', 'Three.js', 'TailwindCSS', 'Unsplash API'],
    heroImage: vocabImg,
    status: ''
  },

  'grammar-of-resistance': {
    title: 'Toward a Grammar of Resistance',
    subtitle: 'A critical framework for interface design, power, and language',
    description: 'This long-form academic article investigates how language, UI structures, and algorithmic systems encode sociopolitical values. Drawing from fields including critical theory, computational linguistics, interface design, and posthuman studies, the piece articulates a “grammar” for designing digital systems that resist dominant techno-cultural narratives. The article introduces the Multilingual Artistic Code (MAC) framework — a conceptual and design scaffold for culturally specific, ethically grounded digital tools. Structured as a theoretical exploration with visual examples, it serves both as an academic contribution and a call for interdisciplinary design resistance.',
    tech: [],
    heroImage: grammarImg,
    status: 'Sent for journal submission'
  },

  'hymn-of-resistance': {
    title: 'Hymn of Resistance',
    subtitle: 'An audiovisual protest felt through color, motion, and sound',
    description: 'Hymn of Resistance is an interactive art piece that transforms a nearly century-old anti-fascist speech into a multisensory experience. The speaker remains unnamed, allowing the emotional register of the words to take center stage. The interface responds dynamically to shifts in tone — bursts of rage trigger visual distortions, while moments of hope pulse gently through light and sound. Designed with React, the Canvas API, and WebAudio, the piece is both a standalone digital artwork and an evolving prototype for a VJ plugin or live audiovisual tool. It asks: what does resistance feel like when rendered through code?',
    tech: ['React', 'Canvas', 'WebAudio API'],
    heroImage: hymnImg,
    status: 'https://hymn-of-resistance.netlify.app/'
  },

  brainmap: {
    title: 'My Brainmap',
    subtitle: 'A poetic system of thought — rendered as interactive graph',
    description: 'Brainmap is a creative CV built as a living interface — a network of my core concepts, digital tools, and interdisciplinary projects. Rather than listing experiences, it visualizes how they interconnect. Each node represents a thematic focus. Designed with React, Brainmap is both a portfolio experiment and a personal cartography — a map of meaning, not just milestones.',
    tech: ['React', 'Canvas', 'WebAudio API'],
    heroImage: mindImg,
    status: 'Published in the hero section of this website'
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen p-10 bg-blackish text-bone">
        <h1 className="text-3xl font-bold text-electric">Oh, no! Project not found</h1>
        <Link to="/" className="inline-block mt-4 underline text-bone">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-blackish text-bone">
      {project.heroImage && (
        <div className="mb-8">
          <img
            src={project.heroImage}
            alt={`${project.title} hero`}
            className="w-screen max-h-[100vh] object-cover rounded-lg"
          />
        </div>
      )}
      <h1 className="mb-2 font-mono text-4xl font-bold text-electric">{project.title}</h1>
      <p className="mb-4 font-mono text-lg">{project.subtitle}</p>
      <p className="mb-6 text-justify">{project.description}</p>

      <h3 className="mb-2 font-mono text-xl font-semibold">Technologies used</h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((t, i) => (
          <span key={i} className="px-1 py-1 font-mono text-sm rounded-full text-bone">
            {t}
          </span>
        ))}
      </div>

      {project.status && (
        <>
          <h3 className="mb-2 font-mono text-xl font-semibold">Status</h3>
          <div className="mb-10">
            {project.status.startsWith('http') ? (
              <a
                href={project.status}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1 font-mono text-sm transition border rounded-full text-electric border-electric hover:bg-electric hover:text-blackish"
              >
                View Live ↗
              </a>
            ) : (
              <span className="inline-block px-3 py-1 font-mono text-sm border rounded-full text-bone border-bone/50">
                {project.status}
              </span>
            )}
          </div>
        </>
      )}

      <Link to="/#/" className="inline-block px-6 py-2 transition border rounded border-bone hover:bg-electric hover:text-blackish">
        ← Back to projects
      </Link>
    </div>
  );
}
