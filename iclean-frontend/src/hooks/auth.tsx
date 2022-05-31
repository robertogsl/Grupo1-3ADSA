import React, { createContext, useCallback, useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

import { api } from "../services/api";

interface SignInCredentials {
  email: string;
  senha: string;
  userType: number;
}

interface Proprietaria {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  autenticado: boolean;
}

interface Contratada extends Proprietaria {
  cep: string;
  complemento: string;
  numero: string;
  longitude: number;
  latitude: number;
}

interface AuthContextData {
  user: Proprietaria | Contratada;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  getUser(): Contratada | Proprietaria | {};
  getUserType(): number;
  fnSetUserType(user: number): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [userType, setUserType] = useState(0);
  const [user, setUser] = useState<Proprietaria | Contratada>(() => {
    const user = localStorage.getItem("@iclean:user");

    if (user) {

      const userToReturn = JSON.parse(user)

      if (userToReturn.latitude) {
        setUserType(1);
      } else {
        setUserType(0);
      }

      return userToReturn;
    }

    return {} as Contratada | Proprietaria;
  });


  const getUserType = useCallback(() => {
    return userType;
  }, [userType]);

  const fnSetUserType = useCallback((user: number) => {
    setUserType(user);
  }, []);

  const getUser = useCallback(() => {
    const user = localStorage.getItem("@iclean:user");

    if (user) {
      return JSON.parse(user);
    }

    return null;
  }, []);

  const history = useHistory();

  const signIn = useCallback(
    async ({ email, senha, userType }) => {
      try {
        const url = userType === 0 ? "/proprietarias/autenticar" : "/contratadas/autenticar";

        const data = {
          email, senha
        }

        const response = await api.post<Contratada | Proprietaria>(url, data);

        const user = response.data;

        localStorage.setItem("@iclean:user", JSON.stringify(user));
        setUser(user);

        history.push("/dashboard")
      } catch (err) {
        toast.error("Erro ao logar, revise as informações e tente novamente.");
      }
    },
    [history],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@iclean:user");

    setUser({} as Contratada)
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        getUser,
        getUserType,
        fnSetUserType
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { useAuth, AuthProvider };
