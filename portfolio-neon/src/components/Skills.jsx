import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/site';
import { useEffect, useState } from 'react';

function CircularProgress({ skill, delay }) {
  const [progress, setProgress] = useState(0);
  const [ref, isVisible] = useScrollReveal(0.2);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="glass-card p-6 rounded-xl text-center"
    >
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold gradient-text">{progress}%</span>
        </div>
      </div>
      <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
      <p className="text-sm text-gray-400 mt-1">{skill.category}</p>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.2);
  const topSkills = siteData.skills.filter(s => s.level >= 80);

  return (
    <section id="skills" className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </motion.div>

        {/* Circular Progress Bars */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {topSkills.map((skill, index) => (
            <CircularProgress key={skill.name} skill={skill} delay={index * 100} />
          ))}
        </div>

        {/* All Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-neon-cyan">
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {siteData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  💻
                </div>
                <p className="text-sm font-semibold text-white">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-neon-mint">
            Development Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {siteData.tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className="glass-card px-6 py-3 rounded-full text-white font-medium hover:bg-gradient-neon transition-all cursor-pointer"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
