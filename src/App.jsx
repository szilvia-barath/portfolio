import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import useTranslation from './hooks/useTranslation';
import BrainMap3D from './components/BrainMap3D';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import GlitchIntro from './components/GlitchIntro';
import Gallery from './components/Gallery';

export default function App() {
  const [showBrain, setShowBrain] = useState(false);
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('introPlayed'));
  const { t, lang, setLang } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');

  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();

  const heroInView = useInView(heroRef, { threshold: 0.5 });
  const aboutInView = useInView(aboutRef, { threshold: 0.5 });
  const projectsInView = useInView(projectsRef, { threshold: 0.5 });
  const galleryInView = useInView(galleryRef, { threshold: 0.5 });
  const contactInView = useInView(contactRef, { threshold: 0.5 });

  useEffect(() => {
    if (contactInView) setActiveSection('contact');
    else if (galleryInView) setActiveSection('gallery');
    else if (projectsInView) setActiveSection('projects');
    else if (aboutInView) setActiveSection('about');
    else if (heroInView) setActiveSection('hero');
  }, [heroInView, aboutInView, projectsInView, galleryInView, contactInView]);

  // Run once after mount: scroll to anchor if needed
  useEffect(() => {
    const anchor = window.location.hash;
    if (anchor === '#projects') {
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'auto' });
      }, 0);
    }
  }, []);

  // When intro finishes
  const handleIntroFinish = () => {
    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(false);
    setShowBrain(true);
  };

  useEffect(() => {
    if (!showIntro) setShowBrain(true);
  }, [showIntro]);

  return (
    <motion.div className="relative w-full overflow-hidden scroll-smooth">
      {showIntro && <GlitchIntro onFinish={handleIntroFinish} />}
      <Navbar active={activeSection} />

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative w-full h-screen overflow-hidden">
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
              className="font-mono text-4xl md:text-6xl glitch-flicker"
            >
              {t('explore')}
            </motion.h1>
          </motion.div>
        )}

        <div className="absolute z-40 px-4 bottom-10 left-6 sm:left-10">
          <button
            onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-2 font-mono text-sm transition glitch-flicker-2 sm:text-base text-electric/60 hover:text-white"
          >
            Find out more ↓
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="flex flex-col items-center px-4 min-w-screen animated-gradient" id="about">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="w-full px-4 animated-gradient md:px-4 bg-blackish text-bone">
        <Projects />
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="w-full px-4 bg-blackish text-bone animated-gradient">
        <Gallery />
      </section>

      {/* Contact / Footer Section */}
      <motion.section
        ref={contactRef}
        id="contact"
        className="flex items-center justify-center w-screen h-screen md:px-0 bg-blackish text-bone"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Footer />
      </motion.section>
    </motion.div>
  );
}
