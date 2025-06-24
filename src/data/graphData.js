const graphData = {
  nodes: [
    // Core
    { id: 'Mind', group: 0, description: 'The central node: your living connector — code, memory, resistance, and care.' },

    // Group 1: Core Concepts
    { id: 'MAC', group: 1, description: 'A research framework exploring post-postmodern phenomena and the shaping of post-human culture, society, and education — through artistic practice, digital resistance, and ethical design.' },
    { id: 'Interfacial Thinking', group: 1, description: 'Treating interfaces as spaces of cultural negotiation — where meaning, structure, and identity are not just displayed, but enacted.' },
    { id: 'Languages', group: 1, description: 'Where linguistic fluency and computational fluency meet: human languages, programming languages, and the patterns they shape in thought.' },
    { id: 'Experiments', group: 1, description: 'Prototypes, essays, and creative outputs — moments where theory meets code and ideas take on form.' },
    { id: 'Research', group: 1, description: 'Your inquiries, frameworks, and provocations — what you question, test, or want to reimagine.' },

    // Group 2: Aesthetics + Emotion
    { id: 'Poetic UX', group: 2, description: 'Interfaces that spark emotion, reflection, and calm — poetic not just in content, but in how they care, support, and resonate.' },
    { id: 'Multimodal', group: 2, description: 'Working across text, sound, visuals, interaction, and motion — meaning from the weave, not the thread.' },
    { id: 'Cultural Code', group: 2, description: 'Code as memory, identity, and resistance — shaped by who writes it, and for whom.' },
    { id: 'Synesthetic Design', group: 2, description: 'Translating between senses — from sound to color, language to motion, feeling to interface.' },
    { id: 'Ethical Aesthetics', group: 2, description: 'Design guided by care, consent, and context — where aesthetics carry responsibility.' },

    // Group 3: Mediums & Tools
    { id: 'Conversational Interfaces', group: 3, description: 'Designing systems for written and spoken interaction — accessible, emotional, human.' },
    { id: 'Language Models as Collaborators', group: 3, description: 'Working with AI as creative colleagues — shaping language through empathy and prompts.' },
    { id: 'Embedded Interaction', group: 3, description: 'Interfaces embedded in bodies, lives, and routines — ambient, intuitive, urgent.' },
    { id: 'Visual Narratives', group: 3, description: 'Stories told through structure, space, and motion — meaning made visual.' },
    { id: 'Voice UI', group: 3, description: 'Voice as input and output — accessible, affective, and immediate.' },
    { id: 'Text-to-Feeling Translation', group: 3, description: 'Systems that turn language into emotion, visuals, or sensation — bridging meaning and affect.' },

    // Group 4: Languages + Code Fluency
    { id: 'Hungarian', group: 4, description: 'Root language of emotion, memory, and intimacy.' },
    { id: 'Italian', group: 4, description: 'Language of adulthood, aesthetic nuance, and emotional expression.' },
    { id: 'English', group: 4, description: 'Language of research, connection, and global discourse.' },
    { id: 'HTML & CSS', group: 4, description: 'Structure and surface of the web — minimal, expressive, essential.' },
    { id: 'JavaScript', group: 4, description: 'Logical, chaotic, poetic — the evolving dance of structure and surprise.' },
    { id: 'Vue & React', group: 4, description: 'Your expressive frontend frameworks — flexible and reactive, structured and alive.' },

    // Group 5: Projects / Experiments
    { id: 'GlucoReflect', group: 5, description: 'A tool for diabetics — blending glucose tracking, reflection, and emotional support.' },
    { id: 'Hymn of Resistance', group: 5, description: 'A multilingual, multisensory digital poem — music, movement, and protest as interface.' },
    { id: 'Vocabulary of Resistance', group: 5, description: 'A map exploring how resistance is written, said, and shared.' },
    { id: 'Towards a Grammar of Resistance', group: 5, description: 'The theoretical foundation of MAC — an academic paper.' },
    { id: 'Learn to Resist', group: 5, description: 'A reflection on post-human education.' },
    { id: 'The First Cyborgs', group: 5, description: 'A poetic-critical essay on diabetes tech, exploitative devices, and cyberbodily autonomy.' },
    { id: 'Ada Lovelace', group: 5, description: 'A storytelling website and chatbot — about the birth of algorithms.' },

    // Group 6: Artistic Activity
    { id: 'Wearable Paintings', group: 6, description: 'Hand-painted clothing — glowing, metallic, and uniquely expressive acts of lived resistance.' },
    { id: 'Patches & Ceramics', group: 6, description: 'Small crafted pieces — from stitched patches to hand-glazed clay.' },
    { id: 'Knits & Crochets', group: 6, description: 'Looped language — warmth and care made material.' },
    { id: 'Collage & Drawing', group: 6, description: 'Analog storytelling — layering memory, media, and form.' },
    { id: 'Interactive Collage Book', group: 6, description: 'A physical/digital hybrid — interface as memory, exploration, and poetic movement.' },
    { id: 'Scotty', group: 6, description: 'My four-legged sidekick — the one closest to my heart.' },

    // Group 99: Optional Decorative
    { id: '✶', group: 99, decorative: true },
    { id: '∞', group: 99, decorative: true },
    { id: '↺', group: 99, decorative: true },
    { id: '夢', group: 99, decorative: true },
    { id: '♡', group: 99, decorative: true }
  ],
  links: [
    { source: 'Mind', target: 'MAC' }, { source: 'Mind', target: 'Interfacial Thinking' },
    { source: 'Mind', target: 'Languages' }, { source: 'Mind', target: 'Experiments' }, { source: 'Mind', target: 'Research' },
    { source: 'MAC', target: 'Poetic UX' }, { source: 'MAC', target: 'Ethical Aesthetics' }, { source: 'MAC', target: 'Cultural Code' },
    { source: 'MAC', target: 'Text-to-Feeling Translation' },
    { source: 'Interfacial Thinking', target: 'Voice UI' }, { source: 'Interfacial Thinking', target: 'Conversational Interfaces' }, { source: 'Interfacial Thinking', target: 'Visual Narratives' },
    { source: 'Languages', target: 'Hungarian' }, { source: 'Languages', target: 'Italian' }, { source: 'Languages', target: 'English' },
    { source: 'Languages', target: 'HTML & CSS' }, { source: 'Languages', target: 'JavaScript' }, { source: 'Languages', target: 'Vue & React' },
    { source: 'Experiments', target: 'GlucoReflect' }, { source: 'Experiments', target: 'Hymn of Resistance' }, { source: 'Experiments', target: 'Ada Lovelace' },
    { source: 'Research', target: 'Towards a Grammar of Resistance' }, { source: 'Research', target: 'Learn to Resist' }, { source: 'Research', target: 'The First Cyborgs' },
    { source: 'Research', target: 'Vocabulary of Resistance' },     { source: 'Scotty', target: 'Mind' },
    { source: 'Poetic UX', target: 'Synesthetic Design' }, { source: 'Multimodal', target: 'Visual Narratives' },
  ]
};

export default graphData;
