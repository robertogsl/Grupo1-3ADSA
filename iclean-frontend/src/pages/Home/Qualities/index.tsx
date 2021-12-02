import { Container, Content } from './styles';

import missaoPNG from '../../../assets/missao.png';
import visaoPNG from '../../../assets/visao.svg';
import valoresPNG from '../../../assets/valores.png';

interface IQualities {
  image: string;
  title: string;
  text: string;
}

const qualities: IQualities[] = [
  {
    image: missaoPNG,
    title: "Missão",
    text: "Nosso objetivo é acabar com a complexidade de procura por serviço."
  },
  {
    image: visaoPNG,
    title: "Visão",
    text: "Tornar o processo cada vez mais humano e seguro."
  },
  {
    image: valoresPNG,
    title: "Valores",
    text: "Empenho para com os clientes, parceiros e tecnologia. Capacidade para aceitar grandes desafios e conduzi-los até ao final. Atitude crítica, dedicação para com a qualidade e melhoramento pessoal"
  },
]

export function Qualities() {
  return (
    <Container>
      <Content>
        {qualities.map(qualities => (
          <div>
            <img src={qualities.image} alt="Imagem" />
            <strong>{qualities.title}</strong>
            <p>{qualities.text}</p>
          </div>
        ))}
      </Content>
    </Container>
  )
}
