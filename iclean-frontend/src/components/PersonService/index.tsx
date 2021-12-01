import {
  Container,
  Content,
  FirstCard,
  Button
} from "./styles";

import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { Header } from "../Header";
import { BackButton } from "../BackButton";
import { Line } from "../ConfirmInvite/styles";
import { toast } from "react-toastify";

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

interface macs {
  job: IJobs
}


export function PersonService({ job }: macs) {
  const { user } = useAuth();

  const history = useHistory();

  function handleCandidatar() {
    api.put(`/trabalhos/${job.id}/candidata/${user.id}`);
    toast.success("Candidatura feita com sucesso")
  }

  return (
    <Container>
      <Content>
        <FirstCard>
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
          <Button>
            <button onClick={handleCandidatar}>Candidatar-se</button>
            <button onClick={() => history.push(`/profile/${job.proprietaria.id}`)}>Visitar perfil</button>
          </Button>
        </FirstCard>
      </Content>
    </Container>
  );
}
