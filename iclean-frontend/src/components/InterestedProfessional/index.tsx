import { Title, Content, CardInvite, Button } from "./styles";
import CardGeneric from "../CardGeneric";
import { FaArrowRight } from "react-icons/fa";

import Invite from "../../assets/inviteZero.svg";
import InviteOne from "../../assets/inviteOne.svg";
import InviteTwo from "../../assets/inviteTwo.svg";
import InviteThree from "../../assets/inviteThree.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

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

interface IInterestedProfessional {
  idTrabalho: string;
}

interface ICandidata {
  nome: string;
  id: number;
}

interface IJob {
  candidatas: ICandidata[];
}

export function InterestedProfessional({ idTrabalho }: IInterestedProfessional) {
  const [job, setJob] = useState<IJob>({} as IJob)

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateSrc = () => {
    let userRender = getRandomInt(1, 4);

    if (userRender === 1) {
      return Invite
    } else if (userRender === 2) {
      return InviteOne
    } else if (userRender === 3) {
      return InviteTwo
    } else {
      return InviteThree
    }
  }

  useEffect(() => {
    api.get(`/trabalhos/${idTrabalho}`).then(res => {
      setJob(res.data)
    })
  }, [])

  return (
    <CardGeneric>
      <Title> Profissionais interessados: </Title>
      <Content>
        {job.candidatas.map((interest) => (
          <CardInvite>
            <img src={generateSrc()} alt="icon" />

            <span>
              {interest.nome}
              <FaArrowRight size={30} color="#000" />
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
