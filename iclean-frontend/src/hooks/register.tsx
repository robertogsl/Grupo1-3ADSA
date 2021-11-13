import React, { useContext, createContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../services/api';

interface IRegisterData {
  email: string;
  senha: string;
  nome: string;
  cpf: string;
  telefone: string;
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
  submitProprietaria: () => void;
  submitContratada: () => void;
}

const RegisterContext = createContext<RegisterContextData>({} as RegisterContextData);

export const RegisterProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState(0);
  const [registerData, setRegisterData] = useState<IRegisterData>({} as IRegisterData);

  const history = useHistory();

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

  const submitContratada = async () => {
    const data = {
      ...registerData,
    }

    try {
      await api.post("/contratadas", data);

      // toast("Cadastro realizado com sucesso", { type: "success" });
      alert("Cadastro realizado com sucesso");

      history.push("/login")
    } catch (error) {
      // toast("Não foi possível realizar o cadastro, tente novamente.", { type: "error" })

      alert("Não foi possível efetuar o cadastro, tente novamente.");
    }
  };

  const submitProprietaria = async () => {
    const data = {
      nome: registerData.nome,
      cpf: registerData.cpf,
      telefone: registerData.telefone,
      dataNascimento: registerData.dataNascimento,
      email: registerData.email,
      senha: registerData.senha,
    }

    try {
      await api.post("/proprietarias", data);

      // toast("Cadastro realizado com sucesso", { type: "success" });
      alert("Cadastro realizado com sucesso");

      history.push("/login")
    } catch (error) {
      // toast("Não foi possível realizar o cadastro, tente novamente.", { type: "error" })

      alert("Não foi possível efetuar o cadastro, tente novamente.");
    }
  };

  return (
    <RegisterContext.Provider value={{ currentStep, changeStep, handleChooseUserType, registerData, getUserType, handleChangeRegisterData, submitProprietaria, submitContratada }}>
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
