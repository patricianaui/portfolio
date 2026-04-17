import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const currentItems = [
  {
    icon: "📍",
    label: "building",
    value: "merkana.ph",
  },
  {
    icon: "📚",
    label: "learning",
    value: "python, data science, ml, ui/ux",
  },
  {
    icon: "📖",
    label: "reading",
    value:
      "so good they can't ignore you, branding that means business",
  },
];

export function Currently() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="border border-accent/30 bg-accent/5 p-12">
          <div className="space-y-8">
            {currentItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.1 * (index + 1),
                }}
                className="grid grid-cols-[auto,1fr] gap-4 items-baseline"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span
                    style={{ fontFamily: "var(--font-mono)" }}
                    className="text-sm text-accent opacity-90 min-w-[100px] lowercase"
                  >
                    {item.label}
                  </span>
                </div>
                <span
                  className="text-lg lowercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-accent/20"
          >
            <p
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-xs text-accent/60 flex items-center gap-2 lowercase"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              last updated: april 2026
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}