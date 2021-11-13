import { Title, Content, CardInvite } from "./styles";
import CardGeneric from "../CardGeneric";
import { FaArrowRight } from "react-icons/fa";

import personInvite from "../../assets/inviteZero.svg";
import cards from "../../assets/card.png";

interface ISserviceInvitation {
  src: string;
  name: string;
  iconArrow: () => JSX.Element;
}

const descInvite: ISserviceInvitation[] = [
  {
    src: personInvite,
    name: "Brad Pitt",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: personInvite,
    name: "Brad Pitt",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: personInvite,
    name: "Brad Pitt",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: personInvite,
    name: "Brad Pitt",
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
