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

import { FaChevronRight, FaUserAlt, FaMapMarkerAlt, FaArrowAltCircleLeft } from "react-icons/fa";

interface ISdescServices {
  title: string;
  person: string;
  distance: string;
  candidact: number;
  iconPerson: () => JSX.Element;
  iconLocation: () => JSX.Element;
  iconArrow: () => JSX.Element;
}

const descServices: ISdescServices[] = [
  {
    title: "Diarista - Limpeza padrão",
    person: "Dulce S.",
    distance: "5 KM",
    candidact: 3,
    iconPerson: () => <FaUserAlt size={13} color="#FFF" />,
    iconLocation: () => <FaMapMarkerAlt size={13} color="#FFF" />,
    iconArrow: () => <FaChevronRight size={30} color="#FFF" />,
  },
  {
    title: "Diarista - Limpeza padrão",
    person: "Carlos A.",
    distance: "3 KM",
    candidact: 4,
    iconPerson: () => <FaUserAlt size={13} color="#FFF" />,
    iconLocation: () => <FaMapMarkerAlt size={13} color="#FFF" />,
    iconArrow: () => <FaChevronRight size={30} color="#FFF" />,
  },
  {
    title: "Diarista - Limpeza pesada",
    person: "Dulce S.",
    distance: "5 KM",
    candidact: 0,
    iconPerson: () => <FaUserAlt size={13} color="#FFF" />,
    iconLocation: () => <FaMapMarkerAlt size={13} color="#FFF" />,
    iconArrow: () => <FaChevronRight size={30} color="#FFF" />,
  },
  {
    title: "Diarista - Limpeza padrão",
    person: "Carlos A.",
    distance: "3 KM",
    candidact: 1,
    iconPerson: () => <FaUserAlt size={13} color="#FFF" />,
    iconLocation: () => <FaMapMarkerAlt size={13} color="#FFF" />,
    iconArrow: () => <FaChevronRight size={30} color="#FFF" />,
  },
  {
    title: "Diarista - Limpeza padrão",
    person: "Dulce S.",
    distance: "5 KM",
    candidact: 3,
    iconPerson: () => <FaUserAlt size={13} color="#FFF" />,
    iconLocation: () => <FaMapMarkerAlt size={13} color="#FFF" />,
    iconArrow: () => <FaChevronRight size={30} color="#FFF" />,
  },
  {
    title: "Diarista - Limpeza padrão",
    person: "Carlos A.",
    distance: "3 KM",
    candidact: 0,
    iconPerson: () => <FaUserAlt size={13} color="#FFF" />,
    iconLocation: () => <FaMapMarkerAlt size={13} color="#FFF" />,
    iconArrow: () => <FaChevronRight size={30} color="#FFF" />,
  },
  {
    title: "Diarista - Limpeza padrão",
    person: "Dulce S.",
    distance: "5 KM",
    candidact: 3,
    iconPerson: () => <FaUserAlt size={13} color="#FFF" />,
    iconLocation: () => <FaMapMarkerAlt size={13} color="#FFF" />,
    iconArrow: () => <FaChevronRight size={30} color="#FFF" />,
  }
];

export function CardServices() {
  return (
    <Container>
        <Title>
        <FaArrowAltCircleLeft size={30} color="#000" /> Voltar
        </Title> 
      <Content>      
        
        {descServices.map((services) => (
          <CardService>
            <Candidacts>
              <Separator>
                  <h1>{services.title}</h1>
                  <p>
                    {services.iconPerson()} {services.person}
                  </p>
                  <p>
                    {services.iconLocation()} {services.distance}
                  </p>
              </Separator>

              {services.candidact === 0 ? (
                <p> SEJA O PRIMEIRO A SE CANDIDATAR! </p>
              ) : (
                <Option>
                  {Array.from({ length: 4 }).map((a, index) => {
                    return index + 1 <= services.candidact ? (
                      <CardApagado />
                    ) : (
                      <CardColorido />
                    );
                  })}
                </Option>
              )}
            </Candidacts>
            <span>{services.iconArrow()}</span>
          </CardService>
        ))}
      </Content>
    </Container>
  );
}
