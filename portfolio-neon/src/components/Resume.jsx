import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteData } from '../data/site';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function Resume() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section id="resume" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Download or view my complete professional resume
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
            <div className="w-32 h-32 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-8">
              <FaEye className="text-6xl text-white" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              {siteData.personal.name}
            </h3>
            <p className="text-xl text-neon-cyan mb-6">
              {siteData.personal.role}
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              View my complete professional experience, education, skills, and achievements in my detailed resume.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteData.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button px-8 py-4 neon-border text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gradient-neon transition-all"
              >
                <FaEye /> View Resume
              </a>
              <a
                href={siteData.personal.resume}
                download
                className="glow-button px-8 py-4 bg-gradient-neon text-white font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <FaDownload /> Download PDF
              </a>
            </div>

            {/* Resume Preview Placeholder */}
            <div className="mt-12 h-96 bg-slate-800 rounded-xl flex items-center justify-center border-2 border-neon-purple/30">
              <div className="text-center">
                <div className="text-6xl mb-4">📄</div>
                <p className="text-gray-400">Resume Preview</p>
                <p className="text-sm text-gray-500 mt-2">Click buttons above to view or download</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
