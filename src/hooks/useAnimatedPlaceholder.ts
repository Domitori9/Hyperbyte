import { useState, useEffect } from 'react';

export function useAnimatedPlaceholder(phrases: string[], typingSpeed = 90, deletingSpeed = 40, pause = 1500) {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && currentPhrase === currentFullPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentPhrase === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        if (isDeleting) {
          setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length - 1));
        } else {
          setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length + 1));
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [currentPhrase, currentPhraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pause]);

  return currentPhrase;
}
