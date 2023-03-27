import { useState, useEffect } from 'react';

export const useClock = () => {
  const [clock, setClock] = useState(
    new Date().toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(
        new Date().toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return clock;
};
