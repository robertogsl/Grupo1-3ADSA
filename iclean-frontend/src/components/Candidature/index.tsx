import { Title, Content, CardInvite } from "./styles";
import CardGeneric from "../CardGeneric";
import { FaArrowRight } from "react-icons/fa";

import { useAuth } from '../../hooks/auth';

import Cleaner from "../../assets/cleaner.svg";
import LigthCleaner from "../../assets/lightCleaner.svg";
import Flatiron from "../../assets/flatiron.svg";
import { useEffect } from "react";
import { api } from "../../services/api";

interface ISserviceCandidature {
  src: string;
  name: string;
  iconArrow: () => JSX.Element;
}

const descCandidature: ISserviceCandidature[] = [
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
  },
  {
    src: LigthCleaner,
    name: "Passar roupa",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
  {
    src: Flatiron,
    name: "Passar roupa",
    iconArrow: () => <FaArrowRight size={30} color="#000" />,
  },
];

export function Candidature() {
  const { user } = useAuth();

  useEffect(() => {
    api.get("/")
  }, []);

  return (
    <CardGeneric>
      <Title> Candidaturas: </Title>
      <Content>
        {descCandidature.map((candidature) => (
          <CardInvite>
            <div>
              <img src={candidature.src} />
            </div>

            <span>
              {candidature.name}
              {candidature.iconArrow()}
            </span>
          </CardInvite>
        ))}
      </Content>
    </CardGeneric>
  );
}
