import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/site';

export default function Experience() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section id="experience" className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional journey and career milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-neon"></div>

          {siteData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-neon-cyan rounded-full transform -translate-x-1/2 border-4 border-slate-900 z-10"></div>

              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
                  <span className="inline-block px-4 py-1 bg-gradient-neon text-white text-sm font-semibold rounded-full mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-neon-cyan mb-3">{exp.company}</h4>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
