import { useParams, Link } from 'react-router-dom';

const projects = {
  'glucoreflect': {
    title: 'Glucoreflect',
    subtitle: 'Easier diabetes management with data-driven insights',
    description:
      'GlucoReflect is a frontend project that reimagines diabetes management through a human-centered lens. Beyond tracking, it analyzes user patterns, offers actionable insights, and provides badges to recognize healthy habits. Features include voice logging, photo uploads, CGM data integration, and an empathetic AI agent. Educational prompts support ongoing self-improvement, making the experience about personal growth — not just compliance.',
    tech: ['React', 'GSAP', 'ChatGPT API', 'Tailwind'],
    heroImage: '/glucoreflect-hero.png',

  },
  'ada-lovelace-storytelling': {
    title: 'Ada lovelace Storytelling',
    subtitle: 'Chat with the first programmer',
    description:
'This project is a scrolling, immersive tribute to Ada Lovelace — the world’s first programmer and a figure often overlooked in tech history. I designed it as both a digital monument and a speculative interface, blending archival media, a cyberpunk aesthetic, and interactive storytelling. At its core is a 3D Ada avatar you can chat with, shifting between poetic, futuristic, and mathematical voices. It is my way of honoring the erased labor of women in computing from history books.',
    tech: ['HTML', 'parallax', "JavaScript", "CSS", 'motion-viewer', '3d avatar', 'Europeana Archive'],
heroImage: '/glucoreflect-hero.png',

  },
  'vocabulary-of-resistance': {
    title: 'Vocabulary of Resistance',
    subtitle: 'A semantic frontend interface for navigating creative vocabularies of resistance',
    description:
'This prototype explores the evolving Multilingual Artistic Code — an interactive map of words tied to resistance across languages and cultures. Users can navigate terms, trace connections between values and actions, and see each word visually interpreted through dynamically sourced imagery. It’s a space to reflect on how language not only expresses resistance but actively shapes it. I built it to explore the emotional and political weight words carry — and to offer a moment of meaning in a noisy world.',
tech: ['react-force-graph', 'GSAP'],
heroImage: '/images/glucoreflect-hero.png'

  },

  'grammar-of-resistance': {
    title: 'Toward a Grammar of Resistance',
    subtitle: 'A critical article on language, computation, and power',
    description:
'This written research artifact explores how linguistic structures, UI paradigms, and algorithmic systems encode values — and how design can resist dominant techno-political narratives. Drawing from critical theory, computational linguistics, and interface design, the article proposes a “grammar” for constructing alternative, culturally rooted digital experiences. It connects artistic coding practices to decolonial design thinking, using the Multilingual Artist Code (MAC) framework as a conceptual anchor. The piece is structured as a long-form essay, integrating visual elements to illustrate key concepts. It serves as both a theoretical exploration and a practical guide for designers seeking to embed resistance into their work. The article is intended for academic publication and will be featured on the MAC project page.',
tech: [],
heroImage: '/images/glucoreflect-hero.png',


  },
  'education-of-resistance': {
 title: 'Learning to Resist',
    subtitle: 'Education, ethics, and computational literacy in a time of algorithmic dominance',
    description:
'This upcoming article investigates how education can serve as a site of resistance against extractive, algorithmically governed systems. It questions dominant narratives around “tech literacy” and reframes digital fluency as an ethical, creative, and political practice. Using examples from critical pedagogy, multilingual contexts, and creative coding, the piece aims to sketch a framework for teaching resistance through computational media — especially for artists, designers, and cultural practitioners navigating a rapidly shifting tech landscape. It is closely linked to the MAC / Multilingual Artist Code framework and may include interviews, case studies, or prototype-based reflections.',
    tech: [],
   heroImage: '/glucoreflect-hero.png',

  },
   'first-cyborgs': {
 title: 'The First Cyborgs',
    subtitle: 'An essay on diabetes tech, data, and bodily resistance',
    description: 'The First Cyborgs is a poetic-critical essay in development that explores life with embedded medical technology through the lens of Type 1 diabetes. It considers how daily dependence on devices intersects with ideas of labor, care, and resistance. Drawing on cyborg theory, personal experience, and the politics of medical capitalism, the project aims to blend narrative, visual data, and critical reflection into a hybrid form.',
    tech: [],
   heroImage: '/glucoreflect-hero.png',

  },
    'hymn-of-resistance': {
 title: 'Hymn of Resistance',
    subtitle: 'Music, memory, and the feeling of resistance',
    description: 'This project is a digital protest — a poetic, multisensory interface built around a nearly century-old speech that still feels urgent today. The speaker remains unnamed, allowing the words to resonate on their own. As the speech unfolds, visuals respond to its emotional tone: bursts of rage, waves of hope, pulses of nostalgia. The experience ends with tangible actions — ways to engage, support, and share. It’s designed to be felt in the body as much as seen on the screen.',
    tech: ['React', 'Canvas API', 'WebAudio API'],
   heroImage: '/glucoreflect-hero.png',


  },
      'brainmap': {
 title: 'My Brainmap',
    subtitle: 'A poetic system of thought — made visual',
    description: ' Built as part of my portfolio, the graph invites you to explore the connections between my core ideas, creative tools, and ongoing projects. You’ll find concepts like Poetic UX and Interfacial Thinking alongside prototypes like GlucoReflect, and a mix of spoken and programming languages I use in my practice. Each node is grouped thematically and described in English, Italian, and Hungarian. It’s not a résumé — it’s the architecture behind the work.',
    tech: ['React', 'Canvas API', 'WebAudio API'],
   heroImage: '/glucoreflect-hero.png',

  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-blackish text-bone p-10">
        <h1 className="text-3xl text-electric font-bold">Project not found</h1>
        <Link to="/" className="underline text-bone mt-4 inline-block">← Back to home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blackish text-bone p-10">
      {project.heroImage && (
  <div className="mb-8">
    <img
      src={project.heroImage}
      alt={`${project.title} hero`}
      className="w-full max-h-[60vh] object-cover rounded-lg"
    />
  </div>
)}
      <h1 className="text-4xl font-bold font-mono text-electric mb-2">{project.title}</h1>
      <p className="text-lg  font-mono mb-4">{project.subtitle}</p>
      <p className="mb-6 text-justify">{project.description}</p>

      <h3 className="text-xl mb-2 font-mono font-semibold">Technologies used</h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((t, i) => (
          <span key={i} className=" text-bone px-1 py-1 rounded-full text-sm font-mono">
            {t}
          </span>
        ))}
      </div>

      <Link to="/" className="inline-block border border-bone px-6 py-2 rounded hover:bg-electric hover:text-blackish transition">
        ← Back to Home
      </Link>
    </div>
  );
}
