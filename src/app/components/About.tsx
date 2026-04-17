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
            <p className="text-lg leading-relaxed">
              I'm Pat, a DLSU student building at the intersection of design and
              data. I believe the best products come from understanding both how things look and
              how they work.
            </p>

            <p className="text-lg leading-relaxed">
              Art teaches you to see. Science teaches you to think. Neither alone is enough. The
              intersection is where products stop being functional and start resonating with real
              people.
            </p>

            <p className="text-lg leading-relaxed">
              Right now, I'm learning how to turn data into insight and insight into products that
              matter. Building merkana.ph taught me that student problems are worth solving —
              especially when no one else is solving them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
