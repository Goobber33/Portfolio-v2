import { useState, useEffect } from 'react';

interface TypewriterOptions {
  typingSpeed: number;
}

const useTypewriter = (
  text: string,
  { typingSpeed }: TypewriterOptions
): string => {
  const [typewriterText, setTypewriterText] = useState('');
  let index = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypewriterText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => {
      clearInterval(timer);
    };
  }, [text, typingSpeed]);

  return typewriterText;
};

export default useTypewriter;
