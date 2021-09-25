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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra turpis commodo accumsan molestie. Duis tempus tortor dui, tincidunt tempus est sollicitudin in."
  },
  {
    image: visaoPNG,
    title: "Visão",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra turpis commodo accumsan molestie. Duis tempus tortor dui, tincidunt tempus est sollicitudin in."
  },
  {
    image: valoresPNG,
    title: "Valores",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra turpis commodo accumsan molestie. Duis tempus tortor dui, tincidunt tempus est sollicitudin in."
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
