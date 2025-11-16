import { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextType {
  heroTypingComplete: boolean;
  setHeroTypingComplete: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [heroTypingComplete, setHeroTypingComplete] = useState(false);

  return (
    <AnimationContext.Provider value={{ heroTypingComplete, setHeroTypingComplete }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
