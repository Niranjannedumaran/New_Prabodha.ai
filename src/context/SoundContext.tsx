import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundEngine } from '../utils/soundEngine';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playTick: (frequency?: number, duration?: number) => void;
  playPop: (frequency?: number, duration?: number) => void;
  playCrystal: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isSoundEnabled: false,
  toggleSound: () => {},
  playTick: () => {},
  playPop: () => {},
  playCrystal: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  useEffect(() => {
    setIsSoundEnabled(soundEngine.enabled);
  }, []);

  const toggleSound = () => {
    const next = !soundEngine.enabled;
    soundEngine.enabled = next;
    setIsSoundEnabled(next);
  };

  const playTick = (frequency?: number, duration?: number) => {
    soundEngine.playTick(frequency, duration);
  };

  const playPop = (frequency?: number, duration?: number) => {
    soundEngine.playPop(frequency, duration);
  };

  const playCrystal = () => {
    soundEngine.playCrystal();
  };

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound, playTick, playPop, playCrystal }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
