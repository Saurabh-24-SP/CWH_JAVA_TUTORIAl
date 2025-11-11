import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/site';
import { FaAward } from 'react-icons/fa';

export default function Certificates() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section id="certificates" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gradient-neon overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaAward className="text-8xl text-white/20" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-neon-purple font-semibold">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
