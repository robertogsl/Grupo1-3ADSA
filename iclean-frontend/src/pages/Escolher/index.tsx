import { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Header } from "../../components/Header";

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Line } from "./styles";

import CardGeneric from '../../components/CardGeneric';
import { toast } from 'react-toastify';
import { ChooseProfile } from '../../components/ChooseProfile';

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

interface ICandidata {
  id: string;
  nome: string;
}

interface IParams {
  idCandidata: string;
  idTrabalho: string;
}

export function Escolher() {
  const [candidata, setCandidata] = useState<ICandidata>()

  const params: IParams = useParams();

  useEffect(() => {
    api.get(`/contratadas/${params.idCandidata}`).then(res => {
      setCandidata(res.data)
    })
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <CardGeneric>
          {candidata &&
            <ChooseProfile name={candidata.nome} id={candidata.id} hasChoosed={true} />
          }
        </CardGeneric>
      </Content>
    </Container>
  )
}
