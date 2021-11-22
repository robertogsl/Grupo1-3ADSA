import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles'

import logoSVG from '../../assets/Logo.svg';

export function Header() {
  const { getUser } = useAuth();

  const user = getUser();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoSVG} alt="Logo iClean" />
          <strong>iClean</strong>
        </Link>
        {!user && (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/">Sobre</Link>
            <Link to="/">Contato</Link>
            <Link to="/login">Login</Link>
          </nav>
          )}

      </Content>
    </Container>
  )
}
