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
}

interface ResponseData {
  data: {
    user: Proprietaria | Contratada
  }
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Contratada | Proprietaria>(() => {
    const user = localStorage.getItem("@iclean:user");

    if (user) {
      return JSON.parse(user);
    }

    return {} as Contratada | Proprietaria;
  });

  const history = useHistory();

  const signIn = useCallback(
    async ({ email, password, userType }) => {
      try {
        const url = userType === 0 ? "/proprietarias/autenticar" : "/contratadas/autenticar";

        const response: ResponseData = await api.post(url, {
          email,
          password,
        });

        const { user } = response.data;

        localStorage.setItem("@iclean:user", JSON.stringify(user));

        setUser(user);

        history.push("/dashboard")
      } catch (err) {

      }
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@iclean:user");

    setUser({} as Contratada | Proprietaria);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
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
