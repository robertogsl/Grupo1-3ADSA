import aboutPNG from '../../../assets/homeSobre.png';

import { Container, Content } from './styles';

export function About() {
    return (
        <Container>
            <Content>
                <img src={aboutPNG} alt="Sobre Foto" />
                <div>
                    <h1>Proposta da iClean</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus sapien quis sem egestas varius.</p>
                    <p>Etiam tincidunt, sem sagittis accumsan sollicitudin, ex justo tempus ipsum, eu luctus enim felis eget arcu. Nullam placerat bibendum eros sed tincidunt.</p>
                </div>
            </Content>
        </Container>
    );
};