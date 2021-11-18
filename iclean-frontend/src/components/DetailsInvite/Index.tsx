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

export function DetailsInvite() {
  return (
    <CardGeneric>
<<<<<<< HEAD
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
          <button>Candidatar-se</button>
        </Button>
      </Content>
    </CardGeneric>
  );
}

{
  /* <Title>Convite para o serviço de:</Title>
        <Subtitle>Limpeza padrão:</Subtitle>
        <Line />
=======
      <Title>Convite para o serviço de:</Title>
      <Subtitle>Limpeza padrão:</Subtitle>
      <Line />
      <Icon>
        <FaMapMarkerAlt size={20} color="#FFF" />
        <span> 5 km de distancia</span>
      </Icon>
      <Line />
      
      <FaCircle size={20} color="#FFF" />
        <span>Descrição</span>


      {descService.map((service) => (
        <Format>
          <span>
            {service.icon()}
            <p>{service.desc}</p>
          </span>
        </Format>
      ))}

<FaCircle size={20} color="#FFF" />
        <span>Adicionais</span>

      {descAdd.map((service) => (
        <Format>
          <span>
            {service.icon()}
            <p>{service.desc}</p>
          </span>
        </Format>
      ))}
    </CardGeneric>
  );
}

{
  /* <Title>Convite para o serviço de:</Title>
        <Subtitle>Limpeza padrão:</Subtitle>
        <Line />
>>>>>>> 32ddf9cef6db8ee1b0636a77845743664098fa9d
        <FaMapMarkerAlt size={20} color="#FFF" />
        <span>5 km de distancia</span>
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
        </Content>
        <div>
          <Button>Candidatar-se</Button>
        </div>
      </Format> */
}
