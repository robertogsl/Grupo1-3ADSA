import aboutPNG from '../../../assets/homeSobre.png';

import { Container, Content } from './styles';

export function About() {
    return (
        <Container>
            <Content>
                <img src={aboutPNG} alt="Sobre Foto" />
                <div>
                    <h1>Proposta da iClean</h1>
                    <p>Iclean é uma empresa de tecnologia com sociedade limitada.</p>
                    <p>Com o intuito de revolucionar a contração de auxiliares domésticos.Nossa solução busca inovar tornando o processo de contratação mais simples e eficaz.</p>
                </div>
            </Content>
        </Container>
    );
};