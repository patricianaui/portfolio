import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi 
} from "./ui/carousel";

import merkana1 from "@/assets/projects/merkana/img1.png";
import merkana2 from "@/assets/projects/merkana/img2.png";

const projects = [
  {
    name: "merkana.ph",
    description: "a student marketplace for dlsu — buy and sell with people you actually go to school with (currently in beta)",
    images: [merkana1, merkana2],
    link: "https://www.merkana.ph",
    isPlaceholder: false
  },
  {
    name: "project two",
    description: "coming soon — exploring the next intersection.",
    images: [],
    link: null,
    isPlaceholder: true
  }
];

function ProjectCard({ project, isInView, index }: { project: any, isInView: boolean, index: number }) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api || project.images.length <= 1) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
      className={`group relative overflow-hidden border border-white/10 bg-card ${project.isPlaceholder ? 'opacity-50' : ''
        }`}
      style={{
        aspectRatio: '16/11'
      }}
    >
      {/* Background Carousel */}
      {!project.isPlaceholder && project.images.length > 0 && (
        <div className="absolute inset-0 z-0">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full">
            <CarouselContent className="h-full ml-0">
              {project.images.map((img: string, i: number) => (
                <CarouselItem key={i} className="h-full pl-0">
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={img}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}

      {!project.isPlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      )}

      <div className="relative h-full p-8 flex flex-col justify-between z-20">
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
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-24 h-24 border border-white/10 rounded-sm flex items-center justify-center">
            <span style={{ fontFamily: 'var(--font-mono)' }} className="text-xs opacity-30 lowercase">
              tbd
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

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
            <ProjectCard
              key={project.name}
              project={project}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
