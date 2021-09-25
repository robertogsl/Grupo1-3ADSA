import { Link } from 'react-router-dom';

import { Container, Content } from './styles'

import logoSVG from '../../assets/Logo.svg';

export function Header() {
    return (
        <Container>
            <Content>
                <Link to="/">
                    <img src={logoSVG} alt="Logo iClean" />
                    <strong>iClean</strong>
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/">Sobre</Link>
                    <Link to="/">Contato</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </Content>
        </Container>
    )
}