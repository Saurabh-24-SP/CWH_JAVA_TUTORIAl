import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/site';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-full h-80 bg-gradient-neon rounded-xl flex items-center justify-center text-9xl font-bold text-white/20">
                SP
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-neon-cyan">
              {siteData.personal.role}
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {siteData.personal.bio}
            </p>
            <p className="text-gray-400 mb-8">
              I specialize in creating <span className="text-neon-purple font-semibold">modern</span>, 
              <span className="text-neon-cyan font-semibold"> scalable</span>, and 
              <span className="text-neon-mint font-semibold"> user-friendly</span> web applications. 
              With expertise in both frontend and backend technologies, I bring ideas to life with 
              clean code and beautiful designs.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-neon-purple text-xl" />
                <span>{siteData.personal.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-neon-cyan text-xl" />
                <a href={`mailto:${siteData.personal.email}`} className="hover:text-neon-cyan transition-colors">
                  {siteData.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-neon-mint text-xl" />
                <a href={`tel:${siteData.personal.phone}`} className="hover:text-neon-mint transition-colors">
                  {siteData.personal.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
