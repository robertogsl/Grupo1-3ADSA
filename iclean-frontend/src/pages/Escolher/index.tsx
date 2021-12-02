import { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Header } from "../../components/Header";

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Line } from "./styles";

import CardGeneric from '../../components/CardGeneric';
import { toast } from 'react-toastify';
import { ChooseProfile } from '../../components/ChooseProfile';
import { Loading } from '../../components/Loading';

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
  const [isLoading, setIsLoading] = useState(false);

  const params: IParams = useParams();

  useEffect(() => {
    setIsLoading(true)
    api.get(`/contratadas/${params.idCandidata}`).then(res => {
      setCandidata(res.data)
      setIsLoading(false);
    })
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <CardGeneric>
          {isLoading ? <Loading /> :
            candidata &&
            <ChooseProfile name={candidata.nome} id={candidata.id} hasChoosed={true} />
          }
        </CardGeneric>
      </Content>
    </Container>
  )
}
