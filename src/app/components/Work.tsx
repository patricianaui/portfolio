import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "merkana.ph",
    description: "a student marketplace for dlsu — buy and sell with people you actually go to school with (currently in beta)",
    image: "/merkana-screenshot.png",
    link: "www.merkana.ph",
    isPlaceholder: false
  },
  {
    name: "project two",
    description: "coming soon — exploring the next intersection.",
    image: null,
    link: null,
    isPlaceholder: true
  }
];

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="work" ref={ref} className="min-h-screen py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2
          className="mb-20 lowercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}
        >
          things i've built
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={`group relative overflow-hidden border border-white/10 bg-card ${project.isPlaceholder ? 'opacity-50' : ''
                }`}
              style={{
                aspectRatio: '16/11'
              }}
            >
              {!project.isPlaceholder && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <h3
                    className="mb-3 lowercase"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-base opacity-70 max-w-md lowercase" style={{ fontFamily: 'var(--font-mono)' }}>
                    {project.description}
                  </p>
                </div>

                {!project.isPlaceholder && (
                  <a
                    href={project.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all group-hover:gap-3 lowercase"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    view project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {project.isPlaceholder && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border border-white/10 rounded-sm flex items-center justify-center">
                    <span style={{ fontFamily: 'var(--font-mono)' }} className="text-xs opacity-30 lowercase">
                      tbd
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
