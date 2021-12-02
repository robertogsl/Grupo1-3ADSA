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
  StyleHeader
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
import { BackButton } from "../BackButton";
import { PersonService } from "../PersonService";
import { Loading } from "../Loading";

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

export function CardServices() {
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [modal, setModal] = useState(Boolean);
  const [selectedJob, setSelectedJob] = useState<IJobs>({} as IJobs);
  const [isLoading, setIsLoading] = useState(false);

  function openModal(job: IJobs) {
    setModal(true);
    setSelectedJob(job);
  }

  useEffect(() => {
    setIsLoading(true);
    api.get(`/trabalhos`).then((response) => {
      setJobs(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      <StyleHeader>
        <Header />
      </StyleHeader>
      <Title>
        <BackButton />
      </Title>
      {isLoading ? <Loading /> : modal ? (
        <PersonService job={selectedJob} />
      ) : (
        <Content>
          {jobs.map((services) => {
            const arr = services.especificacao.split(",");

            return (
              <CardService onClick={() => openModal(services)}>
                <Candidacts>
                  <Separator>
                    <h1>{arr[0]}</h1>
                    <p>
                      <FaUserAlt size={13} color="#FFF" /> {services.proprietaria.nome}
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
