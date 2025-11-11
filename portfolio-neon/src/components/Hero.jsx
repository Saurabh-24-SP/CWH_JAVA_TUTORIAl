import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload, FaBriefcase } from 'react-icons/fa';
import Scene3D from './Scene3D';
import CommandLine from './CommandLine';
import FloatingShapes from './FloatingShapes';
import { siteData } from '../data/site';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      <FloatingShapes />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <CommandLine text="Hi, I'm Saurabh Prajapati" delay={80} />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4 neon-text"
            >
              <span className="gradient-text">{siteData.personal.name}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-neon-cyan"
            >
              {siteData.personal.role}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
              className="text-lg text-gray-300 mb-8 max-w-xl"
            >
              {siteData.personal.bio}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="glow-button px-8 py-3 bg-gradient-neon text-white font-semibold rounded-lg flex items-center gap-2"
              >
                <FaBriefcase /> Hire Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="glow-button px-8 py-3 glass-card text-white font-semibold rounded-lg"
              >
                View Projects
              </button>
              <a
                href={siteData.personal.resume}
                download
                className="glow-button px-8 py-3 neon-border text-white font-semibold rounded-lg flex items-center gap-2"
              >
                <FaDownload /> Resume
              </a>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              className="flex gap-4"
            >
              <a
                href={siteData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-2xl text-neon-purple hover:text-neon-cyan transition-all hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href={siteData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-2xl text-neon-purple hover:text-neon-cyan transition-all hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-2xl text-neon-purple hover:text-neon-cyan transition-all hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href={siteData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-2xl text-neon-purple hover:text-neon-cyan transition-all hover:scale-110"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[400px] md:h-[600px] relative"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-neon-cyan rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
