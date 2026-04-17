import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";

const rotatingWords = ["builder", "student", "data", "design"];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-12 left-16 md:left-24 lg:left-32 z-20">
        <p
          className="text-lg md:text-xl lg:text-2xl tracking-wide text-accent"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          patricia naui
        </p>
      </div>

      <div className="absolute top-12 right-16 md:right-24 lg:right-32 z-20">
        <div className="h-8 md:h-9 lg:h-10 relative" style={{ fontFamily: 'var(--font-mono)' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentWordIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl tracking-wide text-accent absolute right-0"
            >
              {rotatingWords[currentWordIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <h1
          className="mb-6 lowercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}
        >
          i build things.
        </h1>
        <p className="text-lg opacity-80 mb-12 max-w-xl mx-auto lowercase" style={{ fontFamily: 'var(--font-mono)' }}>
          at the intersection of art and science.
        </p>
        <button
          onClick={scrollToWork}
          className="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity cursor-pointer lowercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          see my work ↓
        </button>
      </motion.div>
    </section>
  );
}
