import { Title, Content, CardInvite, Button } from "./styles";
import CardGeneric from "../CardGeneric";
import { FaArrowRight } from "react-icons/fa";

import Invite from "../../assets/inviteZero.svg";
import InviteOne from "../../assets/inviteOne.svg";
import InviteTwo from "../../assets/inviteTwo.svg";
import InviteThree from "../../assets/inviteThree.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../Loading";

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
  id: number;
  candidatas: ICandidata[];
}

export function InterestedProfessional({ idTrabalho }: IInterestedProfessional) {
  const [job, setJob] = useState<IJob>()
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

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

  async function getTrabalho() {
    setIsLoading(true);

    await api.get(`/trabalhos/${idTrabalho}`).then(res => {
      setJob(res.data)
      setIsLoading(false);
    })
  }

  async function finalizarTrabalho() {
    await api.delete(`/trabalhos/${job?.id}`);
    toast.success("Trabalho excluído com sucesso.")

    history.push("/services");
  }

  useEffect(() => {
    getTrabalho();
  }, [])

  return (
    <CardGeneric>
      <Title> Profissionais interessados: </Title>
      <Content>
        {isLoading ? <Loading /> : job && job.candidatas.map((interest) => (
          <CardInvite onClick={() => history.push(`/escolher/${interest.id}/${idTrabalho}`)}>
            <img src={generateSrc()} alt="icon" />

            <span>
              {interest.nome}
              <FaArrowRight size={30} color="#000" />
            </span>
          </CardInvite>
        ))}
        <Button>
          <button onClick={finalizarTrabalho}>Serviço finalizado</button>
        </Button>
      </Content>
    </CardGeneric>
  );
}
