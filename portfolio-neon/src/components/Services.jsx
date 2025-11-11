import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/site';
import { FaCode, FaServer, FaPalette } from 'react-icons/fa';

const iconMap = {
  code: FaCode,
  server: FaServer,
  palette: FaPalette,
};

export default function Services() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse">
                  <Icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-neon-purple group-hover:text-neon-cyan transition-colors">
                  <span className="font-semibold">Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
