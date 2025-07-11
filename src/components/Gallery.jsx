// src/components/Gallery.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

// Import artwork images so Vite bundles them
import art1Img from '../assets/1.png';
import art2Img from '../assets/2.png';
import art3Img from '../assets/3.png';

const artworks = [
  {
    id: 'art1',
    title: 'Holiday to the Moon - a collage book',
    image: art1Img,
    caption:
      'I started with old computer-generated graphics and moon photos, then let the collage grow through found materials: magazines, journals, stickers, scraps.',
  },
  {
    id: 'art2',
    title: 'Camminare sola... - digital zine',
    image: art2Img,
    caption:
      'A hybrid zine where I used my hand-drawn drawings of buildings and women’s faces, then remixed them digitally. It’s a quiet reflection on space, safety, memory, and how cities can feel both yours and not yours at the same time.',
  },
  {
    id: 'art3',
    title: 'Serena Serotonina - digital illustrations',
    image: art3Img,
    caption:
      'Serena Serotonina is the name of my old art Instagram — a space where I posted digital illustrations. They were never meant to shout, just to stay visible.',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="w-full px-4 py-16 overflow-x-auto sm:px-6 sm:py-20 text-bone bg-blackish"
    >
      <h2 className="px-20 mb-6 text-3xl font-light sm:text-4xl text-electric">
        Artworks
      </h2>
      <div className="flex gap-6 pb-4 sm:gap-8 snap-x snap-mandatory">
        {artworks.map((art) => (
          <motion.div
            key={art.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="snap-center min-w-[90vw] sm:min-w-[60vw] md:min-w-[40vw] bg-[#111] rounded-xl shadow-lg overflow-hidden cursor-pointer relative"
            onClick={() => setSelected(art)}
          >
            <img
              src={art.image}
              alt={art.title}
              className="object-cover w-full h-56 sm:h-64 md:h-96"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60">
              <h3 className="font-mono text-lg sm:text-xl text-electric">
                {art.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="max-w-4xl p-4 sm:p-6 bg-[#111] border border-electric rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="object-cover w-full mb-4 rounded"
            />
            <h3 className="mb-2 font-mono text-xl sm:text-2xl text-electric">
              {selected.title}
            </h3>
            <p className="text-base italic text-bone/80">
              {selected.caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
