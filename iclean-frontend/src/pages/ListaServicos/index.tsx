import { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Header } from "../../components/Header";

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Line } from "./styles";

import CardGeneric from '../../components/CardGeneric';
import { toast } from 'react-toastify';

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

export function ListaServicos() {
  const [job, setJob] = useState<IJobs>({} as IJobs)

  const params: IParams = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/trabalhos/${Number(params.idTrabalho)}`).then(res => {
      setJob(res.data);
    })
  }, [])

  const handleClick = async () => {
    await api.put(`/trabalhos/${job.id}/candidata/${Number(params.idCandidata)}`);
    toast.success("Doméstica convidada com sucesso!")

    history.push("/listOnMap");
  };

  return (
    <Container>
      <Header />
      <Content>
        <CardGeneric>
          <h1>Convidar para o serviço: </h1>
          {job ? (
            <>
              <h2>{job.especificacao.split(",")[0]}</h2>

              <Line />
              5 km de distância
              <Line />

              <h3>Descrição</h3>
              <ul>
                <li>{job.especificacao.split(",")[0]}</li>
                <li>{job.especificacao.split(",")[1]}</li>
                <li>{job.especificacao.split(",")[2]}</li>
                <li>{job.especificacao.split(",")[3]}</li>
              </ul>

              <h3>Adicionais</h3>
              {job.especificacao.split(",").length > 4 && (
                <ul>
                  {job.especificacao.split(",").map((additional, index) => {
                    if (index > 3) {
                      return <li>{additional}</li>
                    }
                  })}
                </ul>
              )}
            </>
          ) : (
            <h2>Carregando...</h2>
          )}

          <button onClick={handleClick}>Convidar</button>
          <button onClick={() => history.push(`/profile/${job.proprietaria.id}`)}>Visitar perfil</button>
        </CardGeneric>
      </Content>
    </Container>
  )
}
