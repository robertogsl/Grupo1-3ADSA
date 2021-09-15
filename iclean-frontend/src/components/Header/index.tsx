import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <div>logo</div>
                <nav>
                    <a>Home</a>
                    <a>Sobre</a>
                    <a>Contato</a>
                    <a>Login</a>
                </nav>
            </Content>
        </Container>
    )
}