import { useRef, useEffect } from 'react';

export function useSound(src) {
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    audioRef.current.load(); // Pre-carga el audio al montar el componente
  }, []);

  const play = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return play;
}