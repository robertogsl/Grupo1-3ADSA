import React, { createContext, useCallback, useContext, useState } from "react";
import { useHistory } from 'react-router-dom';

import { api } from "../services/api";

interface SignInCredentials {
  email: string;
  senha: string;
  userType: number;
}

interface Proprietaria {
  id: string;
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
  const [user, setUser] = useState<Proprietaria>(() => {
    const user = localStorage.getItem("@iclean:user");

    if (user) {
      return JSON.parse(user);
    }

    return {} as Contratada | Proprietaria;
  });

  const [userType, setUserType] = useState(0);

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

        const response = await api.post(url, {
          email,
          senha,
        });

        const user = response.data;

        localStorage.setItem("@iclean:user", JSON.stringify(user));

        history.push("/dashboard")
      } catch (err) {
        console.log(err)
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
