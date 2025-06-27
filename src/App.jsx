import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useTranslation from './hooks/useTranslation';
import BrainMap3D from './components/BrainMap3D';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import GlitchOverlay from './components/GlitchOverlay';
import useRandomGlitch  from './hooks/glitch.js';
import { useState } from 'react';
import GlitchIntro from './components/GlitchIntro';


export default function App() {
  const [showBrain, setShowBrain] = useState(false);
  const aboutRef = useRef();
  const footerRef = useRef();
  const { t, lang, setLang } = useTranslation();

 return (
    <motion.div className="relative h-screen overflow-x-hidden scroll-smooth">
      <GlitchIntro onFinish={() => setShowBrain(true)} />
      <Navbar />

      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {showBrain && <BrainMap3D aboutRef={aboutRef} />}
        </div>

        {showBrain && (
          <motion.div
            className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-6 px-4 text-center pointer-events-none text-bone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 5.2, ease: 'easeOut' }}
              className="text-4xl font-thin glitch-text md:text-6xl"

            >
              {t('explore')}
            </motion.h1>
            <div className="flex gap-4 text-lg">
              {['en', 'hu', 'it'].map((code) => (
                <motion.button
                  key={code}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLang(code)}
                  style={{ pointerEvents: 'auto' }}
                  className={`transition-colors ${
                    lang === code ? 'font-semibold' : 'opacity-60'
                  }`}
                >
                  {code.toUpperCase()}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        <div className="flex call-to-action">
          <button
            onClick={() =>
              aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
            className="absolute z-40 px-4 py-2 font-mono transition rounded bottom-10 left-15 pulse text-electric/60 hover:text-electric"
          >
            Find out more ↓
          </button>
        </div>
      </section>
      <section ref={aboutRef} className="flex items-center min-w-screen animated-gradient" id="about" >
        <AboutMe />
      </section>

      <section id="projects" className="py-20 bg-blackish text-bone ">
        <Projects/>
      </section>

      <section ref={footerRef} id="contact" className="flex items-center justify-center h-screen bg-blackish text-bone">
        <Footer />
      </section>
    </motion.div>
  );
}
