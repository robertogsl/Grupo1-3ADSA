import { Title, Content, CardInvite } from "./styles";
import CardGeneric from "../CardGeneric";
import { FaArrowRight } from "react-icons/fa";

import Invite from "../../assets/inviteZero.svg";
import InviteOne from "../../assets/inviteOne.svg";
import InviteTwo from "../../assets/inviteTwo.svg";
import InviteThree from "../../assets/inviteThree.svg";

interface ISserviceInvitation {
  src: string;
  name: string;
  iconArrow: () => JSX.Element;
}

const descInvite: ISserviceInvitation[] = [
  {
    src: Invite,
    name: "Brad Pitt",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: InviteOne,
    name: "Giorgio Felicce",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: InviteTwo,
    name: "Dulce Saverin",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: InviteThree,
    name: "Marcel Herrman",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
];

export function MadeInvitation() {
  return (
    <CardGeneric>
      <Title> Convite feitos: </Title>
      <Content>
        {descInvite.map((invites) => (
          <CardInvite>
            <img src={invites.src} />

            <span>
              {invites.name}
              {invites.iconArrow()}
            </span>
          </CardInvite>
        ))}
      </Content>
    </CardGeneric>
  );
}
