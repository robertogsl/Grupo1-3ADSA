import {
  Container,
  Content,
  FirstCard,
  SecondCard,
  Space,
  LinePurple,
  Button,
} from "./styles";

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { Header } from "../Header";
import { BackButton } from "../BackButton";
import { Line } from "../ConfirmInvite/styles";

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
  }

interface macs {
    job: IJobs
}


export function PersonService({job} : macs) {
  const { user } = useAuth();

  function MACSCSCS() {
    api.put(`/trabalhos/${job.id}/candidata/${user.id}`);
  }

  return (
    <Container>
      <Content>
        <FirstCard>
          <h1>Limpeza padrão</h1>
          <Line />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <Line />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            inventore, corporis veritatis autem nam provident est hic quasi
            quibusdam eveniet, animi ut impedit possimus, itaque doloribus illum
            deleniti dolore atque!
          </p>
          <Button>
            <button onClick={MACSCSCS}>Candidatar-se</button>
            <button onClick={MACSCSCS}>Visistar perfil</button>
          </Button>
          <Button>
            
          </Button>
        </FirstCard>
      </Content>
    </Container>
  );
}
