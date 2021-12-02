import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Header } from "../../components/Header";
import CardGeneric from '../../components/CardGeneric';

import { api } from '../../services/api';

import { Container, Content, Line } from "./styles";
import { useAuth } from '../../hooks/auth';
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

interface IParams {
  tipo: string;
  idTrabalho: string;
}

export function Detalhes() {
  const [job, setJob] = useState<IJobs>();
  const [isLoading, setIsLoading] = useState(false);

  const params: IParams = useParams();
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    setIsLoading(true)
    api.get(`/trabalhos/${Number(params.idTrabalho)}`).then(res => {
      setJob(res.data);
      setIsLoading(false)
    })
  }, [])

  const handleClick = async () => {
    if (params.tipo === "convite") {
      toast.success("Convite aceito com sucesso!")

      history.push("/dashboard");
    } else {
      history.push("/candidaturas")
    }
  };

  async function Decline() {
    await api.put(`/trabalhos/${Number(params.idTrabalho)}/candidata/${user.id}/deletar`)
    toast.success("Recusado com sucesso!")
    history.push("/convites")
  }

  return (
    <Container>
      <Header />
      <Content>
        <CardGeneric>
          <h1>Detalhes do serviço</h1>

          {isLoading ? <Loading /> :
            job && (
              <>
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
            )}

          <div className={params.tipo === "convite" ? "doublebutton" : "" }>
            <button onClick={handleClick}>{params.tipo === "convite" ? "Candidatar-se" : "Voltar"}</button>
            {params.tipo === "convite" && (
              <button onClick={Decline}>Recusar</button>
            )}
          </div>
        </CardGeneric>
      </Content>
    </Container>
  )
}
