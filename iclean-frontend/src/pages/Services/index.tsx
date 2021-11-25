import { useParams, useHistory } from 'react-router-dom';

import { Header } from "../../components/Header";

import Cleaner from "../../assets/cleaner.svg";
import LigthCleaner from "../../assets/lightCleaner.svg";
import Flatiron from "../../assets/flatiron.svg";

import { Container, Content, CardInvite, Title } from "./styles";
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { FaArrowRight } from 'react-icons/fa';
import CardGeneric from '../../components/CardGeneric';

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
  }
}

export function Services() {
  const [jobs, setJobs] = useState<IJobs[]>([]);

  const { user } = useAuth();
  const history = useHistory();

  const generateSrc = (id: number): string => {
    const type = jobs.filter(job => id === job.id)[0].especificacao.split(",")[0];

    if (type === "Limpeza Pesada") {
      return Cleaner;
    } else if (type === "Limpeza Padrão") {
      return LigthCleaner;
    } else {
      return Flatiron;
    }
  }

  useEffect(() => {
    api.get<IJobs[]>("/trabalhos").then((res) => {

      const filteredJobs = res.data.filter(job => job.proprietaria.id === user.id)

      setJobs(filteredJobs);
    })
  }, [user.id]);

  return (
    <Container>
      <Header />
      <Content>
      <CardGeneric>
      <Title> Serviços em aberto: </Title>
      {jobs.map((services) => (
          <CardInvite onClick={() => history.push(`/interessados/${services.id}`)}>
            <div>
              <img src={generateSrc(services.id)} alt="Icone" />
            </div>

            <span>
              {services.especificacao.split(",")[0]}
              <FaArrowRight size={30} color="#000" />
            </span>
          </CardInvite>
        ))}
        </CardGeneric>
      </Content>
    </Container>
  )
}
