import { FaCircle } from "react-icons/fa";

import { Container, Format, Content, Button } from "./styles";

import starSVG from "../../assets/star.svg";
import Profile from "../../assets/Group.svg";
import avaliacao1 from '../../assets/avaliacao-1.svg';
import avaliacao2 from '../../assets/avaliacao-2.svg';
import avaliacao3 from '../../assets/avaliacao-3.svg';

interface ISdescProfile {
  src: string;
  name: string;
  star: number;
  praise: number;
  icon: () => JSX.Element;
}

interface IChooseProfileProps {
  name: string;
  id: string;
}

const descService: ISdescProfile[] = [
  {
    src: Profile,
    name: "Maria das Dores",
    star: 5,
    praise: 3,
    icon: () => <FaCircle size={20} color="#FFF" />,
  },
];

const avaliations = [
  {
    id: 1,
    img: avaliacao1,
  },
  {
    id: 2,
    img: avaliacao2,
  },
  {
    id: 3,
    img: avaliacao3,
  }
]

export function ChooseProfile({ name, id }: IChooseProfileProps) {
  return (
    <Container>
      <Content>
          <Format>
            <img src={descService[0].src} alt="" />
            <p>{name}</p>
            <div>
              {Array.from({ length: descService[0].star }).map(() => (
                <img src={starSVG} alt="Estrela" />
              ))}
            </div>
            <div>
            {avaliations.map(avaliation => (
                <div key={avaliation.id}>
                  <img src={avaliation.img} alt="" />
                </div>
              ))}
            </div>
          </Format>
        <Button>
          <button>Convidar para serviço</button>
        </Button>
      </Content>
    </Container>
  );
}
