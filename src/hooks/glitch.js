import { useEffect } from 'react';

export default function useRandomGlitch(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const glitch = () => {
      el.classList.add('glitch');
      setTimeout(() => el.classList.remove('glitch'), 300);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) glitch();
    }, 2000);
1
    return () => clearInterval(interval);
  }, [ref]);
}