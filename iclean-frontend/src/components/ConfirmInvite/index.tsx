import { Title, Subtitle, Line, Format, Content, Button, Icon } from "./styles";
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

export function ConfirmInvite() {
  return (
    <CardGeneric>
      <Content>
        <Title>Convite para o serviço de:</Title>
        <Subtitle>Limpeza padrão:</Subtitle>
        <Line />
        <Icon>
          <FaMapMarkerAlt size={20} color="#FFF" />
          <span> 5 km de distancia</span>
        </Icon>
        <Line />

        <Title>
          <FaCircle size={20} color="#FFF" />
          <span>Descrição</span>
        </Title>

        {descService.map((service) => (
          <Format>
            <span>
              {service.icon()}
              <p>{service.desc}</p>
            </span>
          </Format>
        ))}

        <Title>
          <FaCircle size={20} color="#FFF" />
          <span>Adicionais</span>
        </Title>

        {descAdd.map((service) => (
          <Format>
            <span>
              {service.icon()}
              <p>{service.desc}</p>
            </span>
          </Format>
        ))}
        <Button>
          <button>Convidar</button>
        </Button>
      </Content>
    </CardGeneric>
  );
}
