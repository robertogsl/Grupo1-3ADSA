import { FormEvent, useState, useCallback } from 'react';
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';

import loginPNG from '../../assets/login.png';

import { Container, Content, InputGroup, UserType, UserOption } from './styles';
import { Loading } from '../../components/Loading';

const userTypes = [
  {
    id: 0,
    title: "Proprietária"
  },
  {
    id: 1,
    title: "Contratada"
  }
]

export function Login() {
  const [data, setData] = useState({
    email: "",
    senha: ""
  })
  const [userChecked, setUserChecked] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { signIn, fnSetUserType } = useAuth();

  const handleChange = useCallback((value, name) => {
    setData({ ...data, [name]: value })
  }, [data]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    fnSetUserType(userChecked);

    try {
      await signIn({ email: data.email, senha: data.senha, userType: userChecked });
      setIsLoading(false);
    } catch (error) {
    }
  }, [data, signIn, userChecked, fnSetUserType]);

  return (
    <Container>
      <Header />
      <Content>
        <form>
          <h1>Bem-vindo!</h1>
          <span>Ainda não tem conta, <Link to="/register">cadastre-se</Link></span>

          {isLoading ? <Loading /> : (
            <>
              <InputGroup>
                <label htmlFor="">E-mail</label>
                <input name="email" type="text" onChange={(e) => handleChange(e.target.value, e.target.name)} />
              </InputGroup>


              <InputGroup>
                <label htmlFor="">Senha</label>
                <input type="password" name="senha" onChange={(e) => handleChange(e.target.value, e.target.name)} />
              </InputGroup>

              <UserType>
                {userTypes.map(type => (
                  <UserOption isChecked={type.id === userChecked} onClick={() => setUserChecked(type.id)} key={type.id}>{type.title}</UserOption>
                ))}
              </UserType>

              <strong>Esqueceu a senha?</strong>

              <button type="submit" onClick={handleSubmit}>Login</button>
            </>
          )}

          <span>ou continuar com</span>

          <div className="buttons">
            <button type="button">
              <FaGoogle size={36} color="#F14336" />
            </button>
            <button type="button">
              <FaFacebook size={36} color="#5762C3" />
            </button>
            <button type="button">
              <FaApple size={36} color="#444B59" />
            </button>
          </div>
        </form>
        <img src={loginPNG} alt="Login IMG" />
      </Content>
    </Container>
  );
};
