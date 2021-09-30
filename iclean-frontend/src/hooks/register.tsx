import React, { useContext, createContext, useState, useCallback } from 'react';

interface RegisterContextData {
  currentStep: number;
  changeStep: (direction: 'next' | 'back') => void;
}

const RegisterContext = createContext<RegisterContextData>({} as RegisterContextData);

export const RegisterProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const changeStep = useCallback((direction: 'next' | 'back'): void => {
    if (direction === 'next') {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep])

  return (
    <RegisterContext.Provider value={{ currentStep, changeStep }}>
      {children}
    </RegisterContext.Provider>
  )
}

export function useRegister(): RegisterContextData {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error("useRegister não pode ser usando sem um RegisterProvider");
  }

  return context;
}
