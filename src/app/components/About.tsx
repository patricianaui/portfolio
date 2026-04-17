import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-accent/5 border border-accent/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 border-2 border-accent/30 flex items-center justify-center">
                <span
                  style={{ fontFamily: 'var(--font-mono)' }}
                  className="text-accent/40 text-sm"
                >
                  art ∩ science
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
