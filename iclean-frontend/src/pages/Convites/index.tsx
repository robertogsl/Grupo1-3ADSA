import { useParams } from 'react-router-dom';

import { Header } from "../../components/Header"

import { Container, Content, Title, CardInvite, Button } from "./styles";

import Invite from "../../assets/inviteZero.svg";
import InviteOne from "../../assets/inviteOne.svg";
import InviteTwo from "../../assets/inviteTwo.svg";
import InviteThree from "../../assets/inviteThree.svg";

import { InterestedProfessional } from '../../components/InterestedProfessional';
import CardGeneric from '../../components/CardGeneric';
import { FaArrowRight } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface IParams {
  idTrabalho: string;
}

interface IJobs {
  id: number;
  candidatas: [];
  preco: number;
  especificacao: string;
  cep: string;
  complemento: string;
  numero: string;
  longitude: number;
  latitude: number;
  proprietaria: {
    id: number;
    nome: string;
  }
}

interface ICandProps {
  id: number;
}

export function Convites() {
  const [jobs, setJobs] = useState<IJobs[]>([]);

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

  const { user } = useAuth();

  useEffect(() => {
    api.get("/trabalhos").then(res => {
      let arr = []
      const filteredJobs = res.data.filter(({ candidatas }: IJobs) => {
        return candidatas.find(({ id }: ICandProps) => id === user.id)
      })

      setJobs(filteredJobs);
    })
  }, []);

  return (
    <Container>
      <Header />
      <Content>
      <CardGeneric>
      <Title> Convites feitos: </Title>
      <Content>
        {jobs.map((interest) => (
          <CardInvite>
            <img src={generateSrc()} alt="icon" />

            <span>
              {interest.proprietaria.nome}
              <FaArrowRight size={30} color="#000" />
            </span>
          </CardInvite>
        ))}
        <Button>
          <button>Serviço finalizado</button>
        </Button>
      </Content>
      </CardGeneric>
      </Content>
    </Container>
  )
}
