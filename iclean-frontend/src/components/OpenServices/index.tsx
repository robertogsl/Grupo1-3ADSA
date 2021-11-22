import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { Title, Content, CardInvite } from "./styles";
import CardGeneric from "../CardGeneric";

import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';

import Cleaner from "../../assets/cleaner.svg";
import LigthCleaner from "../../assets/lightCleaner.svg";
import Flatiron from "../../assets/flatiron.svg";

interface ISopenServices {
  src: string;
  name: string;
  iconArrow: () => JSX.Element;
}

const descOpenServices: ISopenServices[] = [
  {
    src: Cleaner,
    name: "Limpeza pesada",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: LigthCleaner,
    name: "Limpeza padrão",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: LigthCleaner,
    name: "Limpeza padrão",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  }
];

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

export function OpenServices() {
  const [jobs, setJobs] = useState<IJobs[]>([]);

  const { user } = useAuth();

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

      const filteredJobs = res.data.filter(job => job.id === user.id)

      setJobs(filteredJobs);
    })
  }, []);

  return (
    <CardGeneric>
      <Title> Serviços em aberto: </Title>
      <Content>
        {jobs.map((services) => (
          <CardInvite>
            <div>
              <img src={generateSrc(services.id)} alt="Icone" />
            </div>

            <span>
              {services.especificacao.split(",")[0]}
              <FaArrowRight size={30} color="#000" />
            </span>
          </CardInvite>
        ))}
      </Content>
    </CardGeneric>
  );
}
