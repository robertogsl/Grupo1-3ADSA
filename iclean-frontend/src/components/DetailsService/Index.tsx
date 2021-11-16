import { Title, Subtitle, Line, Format, Content, Button } from "./styles";
import CardGeneric from "../CardGeneric";
import { FaMapMarkerAlt, FaCircle, FaMinus } from "react-icons/fa";
interface ISdescService {
  icon: () => JSX.Element;
  desc: string;
}

const descService: ISdescService[] = [
  {
    icon: () => <FaMinus size={20} color="#FFF" />,
    desc: "Limpeza Pesada",
  },
  {
    icon: () => <FaMinus size={20} color="#FFF" />,
    desc: "Apartamento",
  },
  {
    icon: () => <FaMinus size={20} color="#FFF" />,
    desc: "2 quartos",
  },
  {
    icon: () => <FaMinus size={20} color="#FFF" />,
    desc: "1 Banheiro",
  },
];

const descAdd: ISdescService[] = [
  {
    icon: () => <FaMinus size={20} color="#FFF" />,
    desc: "Cuidar de pets",
  },
  {
    icon: () => <FaMinus size={20} color="#FFF" />,
    desc: "Lavar roupas",
  },
];

export function DetailsService() {
  return (
    <CardGeneric>
      <Format>
        <Title>Convite para o serviço de:</Title>
        <Subtitle>Limpeza padrão:</Subtitle>
        <Line />
        <FaMapMarkerAlt size={20} color="#FFF" /><span>5 km de distancia</span>
        <Line />
        <FaCircle size={20} color="#FFF" />
        <span>Descrição</span>
        <Content>
          {descService.map((service) => (
            <>
              <span>
                {service.icon()}
                {service.desc}
              </span>
            </>
          ))}
        </Content>
        <FaCircle size={20} color="#FFF" />
        <span>Adicionais</span>
        <Content>
          {descAdd.map((service) => (
            <>
              <span>
                {service.icon()}
                {service.desc}
              </span>
            </>
          ))}
          <div>
          <Button>Voltar</Button>
          </div>
        </Content>
      </Format>
    </CardGeneric>
  );
}
