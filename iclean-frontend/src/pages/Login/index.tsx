import { FormEvent, useState, useCallback } from 'react';
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';

import loginPNG from '../../assets/login.png';

import { Container, Content, InputGroup } from './styles';

export function Login() {
    const [data, setData] = useState({
      email: "",
      senha: ""
    })

    const handleChange = useCallback((value, name) => {
      setData({ ...data, [name]: value })
    }, [data]);

    const handleSubmit = useCallback((e: FormEvent) => {
      e.preventDefault();
      console.log(data);
    }, [data]);

    return (
        <Container>
            <Header />
            <Content>
              <form>
                <h1>Bem-vindo!</h1>
                <span>Ainda não tem conta, <Link to="/register">cadastre-se</Link></span>

                <InputGroup>
                  <label htmlFor="">E-mail</label>
                  <input name="email" type="text" onChange={(e) => handleChange(e.target.value, e.target.name)} />
                </InputGroup>


                <InputGroup>
                  <label htmlFor="">Senha</label>
                  <input name="senha" onChange={(e) => handleChange(e.target.value, e.target.name)} />
                </InputGroup>

                <strong>Esqueceu a senha?</strong>

                <button type="submit" onClick={handleSubmit}>Login</button>

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
