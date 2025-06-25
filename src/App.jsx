import { useRef } from 'react';
import { motion, useScroll, useTransform  } from 'framer-motion';
import useTranslation from './hooks/useTranslation';
import BrainMap3D from './components/BrainMap3D';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import './index.css';
export default function App() {
  const { t, lang, setLang } = useTranslation();
  const aboutRef = useRef();
  const footerRef = useRef();
  const { scrollYProgress } = useScroll();

  const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ['#0e0e0e', '#f2eee3', '#0e0e0e']);
  const textColor = useTransform(scrollYProgress, [0, 0.5, 1], ['#f2eee3', '#0e0e0e', '#f2eee3']);

  return (
    <motion.div className="h-screen overflow-x-hidden scroll-smooth" style={{ backgroundColor: bgColor, color: textColor }}>
      <Navbar />
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BrainMap3D aboutRef={aboutRef} />
        </div>
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 gap-6 px-4 pointer-events-none">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'easeOut' }} className="text-4xl md:text-6xl font-bold">
            {t('explore')}
          </motion.h1>
          <div className="flex gap-4 text-lg">
            {['en', 'hu', 'it'].map((code) => (
              <motion.button key={code} whileTap={{ scale: 0.9 }} onClick={() => setLang(code)} style={{ pointerEvents: 'auto' }} className={`transition-colors ${lang === code ? 'font-semibold' : 'opacity-60'}`}>
                {code.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <div className="flex call-to-action">  <button onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} className="absolute bottom-10 left-15 pulse z-40 px-4 py-2 font-mono text-electric/60 rounded hover:text-electric transition">
          Find out more ↓
        </button></div>

      </section>
      <section ref={aboutRef} className="min-h-screen flex items-center" id="about">
        <AboutMe />
      </section>
<section id="projects" className="min-h-screen overflow-x-auto">
        <Projects />
      </section>
      <section ref={footerRef} id="contact" className="h-screen flex items-center justify-center bg-blackish text-bone">
        <Footer />
      </section>
    </motion.div>
  );
}