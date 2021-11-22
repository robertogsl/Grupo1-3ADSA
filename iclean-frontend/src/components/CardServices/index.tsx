import {
  Container,
  Title,
  Content,
  CardService,
  CardApagado,
  CardColorido,
  Candidacts,
  Separator,
  Option,
} from "./styles";

import {
  FaChevronRight,
  FaUserAlt,
  FaMapMarkerAlt,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { Header } from "../Header";
import { api } from "../../services/api";
import { OpenServices } from "../OpenServices";
import { BackButton } from "../BackButton";

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

export function CardServices() {
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [modal, setModal] = useState(Boolean);

  useEffect(() => {
    api.get(`/trabalhos`).then((response) => {
      setJobs(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Title>
        <BackButton />
      </Title>
      {modal ? (
        <OpenServices />
        ) : (
          <Content>
          {jobs.map((services) => {
            const arr = services.especificacao.split(",");

            return (
              <CardService>
                <Candidacts onClick={() => setModal(true)}>
                  <Separator>
                    <h1>Diarista - {arr[0]}</h1>
                    <p>
                      <FaUserAlt size={13} color="#FFF" /> Carlos Gomes
                    </p>
                    <p>
                      <FaMapMarkerAlt size={13} color="#FFF" /> 5 KM de
                      distancia
                    </p>
                  </Separator>

                  {services.candidatas.length === 0 ? (
                    <p> SEJA O PRIMEIRO A SE CANDIDATAR! </p>
                  ) : (
                    <Option>
                      {Array.from({ length: 4 }).map((a, index) => {
                        return index + 1 <= services.candidatas.length ? (
                          <CardApagado />
                        ) : (
                          <CardColorido />
                        );
                      })}
                    </Option>
                  )}
                </Candidacts>
                <span>
                  <FaChevronRight size={30} color="#FFF" />
                </span>
              </CardService>
            );
          })}
        </Content>
      )}
    </Container>
  );
}
