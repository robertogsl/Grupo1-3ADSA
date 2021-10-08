import React, { useContext, createContext, useState, useCallback, useEffect } from 'react';

interface IRegisterData {
  email: string;
  senha: string;
  nome: string;
  cpf: string;
  celular: string;
  dataNascimento: string;
  cep?: string;
  numero?: string;
  complemento?: string;
  latitude?: number;
  longitude?: number;
}

interface RegisterContextData {
  currentStep: number;
  changeStep: (direction: 'next' | 'back') => void;
  handleChooseUserType: (type: number) => void;
  registerData: IRegisterData;
  getUserType: () => number;
  handleChangeRegisterData: (data: IRegisterData) => void;
}

const RegisterContext = createContext<RegisterContextData>({} as RegisterContextData);

export const RegisterProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState(0);
  const [registerData, setRegisterData] = useState<IRegisterData>({} as IRegisterData);

  const handleChangeRegisterData = useCallback((data: IRegisterData): void => {
    setRegisterData({...registerData, ...data});

    console.log(registerData);
  }, [registerData]);

  const changeStep = useCallback((direction: 'next' | 'back'): void => {
    if (direction === 'next') {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const handleChooseUserType = useCallback((type: number) => {
    setUserType(type);
  }, []);

  const getUserType = useCallback((): number => userType, [userType]);

  return (
    <RegisterContext.Provider value={{ currentStep, changeStep, handleChooseUserType, registerData, getUserType, handleChangeRegisterData }}>
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
