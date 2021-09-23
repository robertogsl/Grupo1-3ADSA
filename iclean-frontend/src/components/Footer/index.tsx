import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import logoSVG from '../../assets/Logo.svg';

import { Container, Content } from './styles';

export function Footer() {
    return (
        <Container>
            <Content>
                <img src={logoSVG} alt="Logo" />
                <span>Empresa fictícia com fins educacionais</span>
                <span>Copyright © 2021 iClean</span>
                <span>Todos os direitos reservados</span>

                <div>
                    <FaFacebook color="#FFFFFF" size={36} />
                    <FaInstagram color="#FFFFFF" size={36} />
                    <FaTwitter color="#FFFFFF" size={36} />
                </div>
            </Content>
        </Container>
    );
};