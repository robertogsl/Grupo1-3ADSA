import { Title, Content, CardInvite } from "./styles";
import CardGeneric from "../CardGeneric";
import { FaArrowRight } from "react-icons/fa";

import Cleaner from "../../assets/cleaner.svg";
import LigthCleaner from "../../assets/lightCleaner.svg";
import Flatiron from "../../assets/flatiron.svg";

interface ISopenServices {
  src: string;
  name: string;
  iconArrow: () => JSX.Element;
}

const descOpenServices: ISopenServices[] = [
  {
    src: Cleaner,
    name: "Limpeza pesada",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: LigthCleaner,
    name: "Limpeza padrão",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: LigthCleaner,
    name: "Limpeza padrão",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  }
];

export function OpenServices() {
  return (
    <CardGeneric>
      <Title> Serviços em aberto: </Title>
      <Content>
        {descOpenServices.map((services) => (
          <CardInvite>
            <div>
              <img src={services.src} />
            </div>

            <span>
              {services.name}
              {services.iconArrow()}
            </span>
          </CardInvite>
        ))}
      </Content>
    </CardGeneric>
  );
}
