import { Title, Content, CardInvite, Button } from "./styles";
import CardGeneric from "../CardGeneric";
import { FaArrowRight } from "react-icons/fa";

import Invite from "../../assets/inviteZero.svg";
import InviteOne from "../../assets/inviteOne.svg";
import InviteTwo from "../../assets/inviteTwo.svg";
import InviteThree from "../../assets/inviteThree.svg";

interface ISserviceInteres {
  src: string;
  name: string;
  iconArrow: () => JSX.Element;
}

const descInterest: ISserviceInteres[] = [
  {
    src: Invite,
    name: "André Oliveira",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: InviteOne,
    name: "José Augusto",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: InviteTwo,
    name: "Maria das Dores",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: InviteThree,
    name: "Carlos Silva",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  }
];

export function InterestedProfessional() {
  return (
    <CardGeneric>
      <Title> Profissionais interessados: </Title>
      <Content>
        {descInterest.map((interest) => (
          <CardInvite>
            <img src={interest.src} />

            <span>
              {interest.name}
              {interest.iconArrow()}
            </span>
          </CardInvite>
        ))}
        <Button>
          <button>Serviço finalizado</button>
        </Button>
      </Content>
    </CardGeneric>
  );
}
