import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';

import { Header } from '../../components/Header';

import loginPNG from '../../assets/login.png';

import { Container, Content, InputGroup } from './styles';
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <Container>
            <Header />
            <Content>
              <form>
                <h1>Bem-vindo!</h1>
                <span>Ainda não tem conta, <Link to="/register">cadastre-se</Link></span>

                <InputGroup>
                  <label htmlFor="">E-mail</label>
                  <input type="text" />
                </InputGroup>


                <InputGroup>
                  <label htmlFor="">Senha</label>
                  <input type="text" />
                </InputGroup>

                <strong>Esqueceu a senha?</strong>

                <button type="submit">Login</button>

                <span>ou continuar com</span>

                <div className="buttons">
                  <button>
                    <FaGoogle size={36} color="#F14336" />
                  </button>
                  <button>
                    <FaFacebook size={36} color="#5762C3" />
                  </button>
                  <button>
                    <FaApple size={36} color="#444B59" />
                  </button>
                </div>
              </form>
              <img src={loginPNG} alt="Login IMG" />
            </Content>
        </Container>
    );
};
