import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from "../../components/Header";

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Line } from "./styles";

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

interface IParams {
  idCandidata: string;
  idTrabalho: string;
}

export function Convidar() {
  const [job, setJob] = useState<IJobs>({} as IJobs)

  const { user } = useAuth();
  const params: IParams = useParams();

  useEffect(() => {
    api.get(`/trabalhos/${params.idTrabalho}`).then(res => {
      setJob(res.data);
    })
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <CardGeneric>
          <h1>Convidar para o serviço: </h1>

          <h2>{job.especificacao.split(",")[0]}</h2>

          <Line />
          5km de distância
          <Line />

          <h3>Descrição</h3>
          <ul>
            <li>{job.especificacao.split(",")[0]}</li>
            <li>{job.especificacao.split(",")[1]}</li>
            <li>{job.especificacao.split(",")[2]}</li>
            <li>{job.especificacao.split(",")[3]}</li>
          </ul>

          <h3>Adicionais</h3>
          <ul>
            <li>macaco</li>
            <li>macaco</li>
          </ul>
        </CardGeneric>
      </Content>
    </Container>
  )
}
