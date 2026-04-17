import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="mb-12 lowercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}
        >
          let's talk.
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
          <motion.a
            href="mailto:patriciasnaui@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl hover:text-accent transition-colors lowercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            email
          </motion.a>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden sm:block text-2xl"
          >
            ·
          </motion.span>

          <motion.a
            href="https://www.linkedin.com/in/patricia-marie-elizabeth-n-02b1a0365/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl hover:text-accent transition-colors lowercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            linkedin
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 text-center border-t border-white/10">
      <p
        style={{ fontFamily: 'var(--font-mono)' }}
        className="text-xs opacity-50 lowercase"
      >
        patricia naui · built with intention · 2026
      </p>
    </footer>
  );
}
