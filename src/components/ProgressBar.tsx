import React, { useEffect, useState } from 'react';
import './GlobalStyle';

interface ProgressBarProps {
  sections?: number[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ sections = [] }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.pageYOffset;
    const scrollPercentage = (currentScroll / totalHeight) * 100;
    setScrollPosition(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateProgress = () => {
    if (sections.length === 0) {
      return 0;
    }

    const progressPerSection = 22 / sections.length;
    const sectionIndex = sections.findIndex(
      (section: number) => scrollPosition >= section
    );

    if (scrollPosition >= sections[sections.length - 1]) {
      // User has scrolled to the last section
      return 100;
    }

    const sectionProgress =
      (scrollPosition - sections[sectionIndex]) /
      (sections[sectionIndex + 1] - sections[sectionIndex]) *
      progressPerSection;

    return Math.min(
      progressPerSection * (sectionIndex + sectionProgress),
      100
    );
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ height: `${calculateProgress()}%` }}></div>
      
    </div>
  );
};

export default ProgressBar;
