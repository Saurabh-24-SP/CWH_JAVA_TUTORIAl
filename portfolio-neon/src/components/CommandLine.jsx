import { useState, useEffect } from 'react';

export default function CommandLine({ text, delay = 100 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <div className="command-line text-lg md:text-xl mb-4">
      <span className="text-neon-mint">$</span> {displayText}
      <span className="cursor-blink">|</span>
    </div>
  );
}
