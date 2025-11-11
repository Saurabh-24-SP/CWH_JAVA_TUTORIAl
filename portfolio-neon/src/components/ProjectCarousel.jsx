import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/site';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCarousel() {
  const [ref, isVisible] = useScrollReveal(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProjects = siteData.projects.filter(p => p.featured);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const currentProject = featuredProjects[currentIndex];

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Project Visual */}
                  <div className="relative h-64 lg:h-full bg-gradient-neon rounded-xl flex items-center justify-center">
                    <div className="text-8xl font-bold text-white/20">
                      {currentProject.title.substring(0, 2)}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {currentProject.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {currentProject.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan text-sm font-semibold rounded-lg border border-neon-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-button px-6 py-3 bg-gradient-neon text-white font-semibold rounded-lg flex items-center gap-2"
                      >
                        <FaGithub /> View Code
                      </a>
                      <a
                        href={currentProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-button px-6 py-3 neon-border text-white font-semibold rounded-lg flex items-center gap-2"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 glass-card rounded-full flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-white transition-all"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 glass-card rounded-full flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-white transition-all"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-neon w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
