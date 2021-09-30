import { useHistory } from 'react-router-dom';

import { Feedbacks } from './Feedbacks';
import { About } from './About';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Container, Content, ButtonMain } from './styles';

import homeMainSVG from '../../assets/homeMain.png';
import { Qualities } from './Qualities';

export function Home() {
    const history = useHistory();

    return (
        <Container>
            <Header />
            <Content>
                <div>
                    <div>
                        <strong>Eu quero limpar e quero já</strong>
                        <span>O jeito mais rapido, facil e confiavel de ter sua casa limpa!</span>
                        <div>
                            <ButtonMain main={false} onClick={() => history.push("/register")}>Agende sua faxina</ButtonMain>
                            <ButtonMain main={true} onClick={() => history.push("/register")}>Trabalhe conosco</ButtonMain>
                        </div>
                    </div>
                    <img src={homeMainSVG} alt="Main" />
                </div>
            </Content>
            <Feedbacks />
            <About />
            <Qualities />
            <Footer />
        </Container>
    );
};
