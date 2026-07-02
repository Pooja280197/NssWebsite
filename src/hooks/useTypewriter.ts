import { useEffect, useState } from 'react';

const PHRASES = [
  
  'Data Science',
  'Cloud Solutions',
  'CRM / Salesforce',
  ];

const TYPE_SPEED = 48;
const DELETE_SPEED = 22;
const HOLD_AFTER_TYPE = 2600;
const HOLD_AFTER_DELETE = 380;
const START_DELAY = 800;

export function useTypewriter() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const step = () => {
      const phrase = PHRASES[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        setText(phrase.slice(0, charIndex));
        setIsDeleting(false);

        if (charIndex >= phrase.length) {
          timeoutId = setTimeout(() => {
            deleting = true;
            setIsDeleting(true);
            step();
          }, HOLD_AFTER_TYPE);
          return;
        }

        timeoutId = setTimeout(step, TYPE_SPEED);
      } else {
        charIndex -= 1;
        setText(phrase.slice(0, charIndex));

        if (charIndex <= 0) {
          deleting = false;
          setIsDeleting(false);
          phraseIndex = (phraseIndex + 1) % PHRASES.length;
          timeoutId = setTimeout(step, HOLD_AFTER_DELETE);
          return;
        }

        timeoutId = setTimeout(step, DELETE_SPEED);
      }
    };

    timeoutId = setTimeout(step, START_DELAY);
    return () => clearTimeout(timeoutId);
  }, []);

  return { text, isDeleting };
}
