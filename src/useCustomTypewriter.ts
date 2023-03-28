import { useState, useEffect } from 'react';

interface TypewriterOptions {
  typingSpeed: number;
}

const useTypewriter = (
  options: { text: string, typingSpeed: number }
): string => {
  const [typewriterText, setTypewriterText] = useState('');
  let index = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < options.text.length) {
        setTypewriterText((prevText) => prevText + options.text[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, options.typingSpeed);

    return () => {
      clearInterval(timer);
    };
  }, [options.text, options.typingSpeed]);

  return typewriterText;
};

export default useTypewriter;
