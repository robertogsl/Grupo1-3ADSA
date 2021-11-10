import {
  FaStore,
  FaCity,
  FaIdCard,
  FaFileAlt,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import {
  Container,
  SideBar,
  Logo,
  Options,
  Helper,
  Content,
  PrimaryCard,
  SecondCard,
  Title,
} from "./styles";

import logoSVG from "../../assets/Logo.svg";
import foguete from "../../assets/foguete.png";
import mapa from "../../assets/mapa.png";
import tasks from "../../assets/task.png";
import cards from "../../assets/cards.png";

interface IScardsDash {
  id: number;
  title: string;
  explicacao: string;
  src: string;
  alt: string;
  iconDash: () => JSX.Element;
}

const dashOptions: IScardsDash[] = [
  {
    id: 1,
    title: "Novo serviço",
    explicacao:
      "Cadastre os seus imóveis e consiga a melhor limpeza em menos tempo",
    src: foguete,
    alt: foguete,
    iconDash: () => <FaChevronRight size={13} color="#fff" />
  },
  {
    id: 2,
    title: "Busca na sua área",
    explicacao: "Descubra os profissionais mais proximos da sua localização",
    src: mapa,
    alt: mapa,
    iconDash: () => <FaChevronRight size={13} color="#fff" />
  },
];

interface IStypeIcons {
  icon: () => JSX.Element;
  desc: string;
}

const staticSideBar: IStypeIcons[] = [
  {
    icon: () => <FaStore size={20} color="#fff" />,
    desc: "Dashboard",
  },
  {
    icon: () => <FaCity size={20} color="#fff" />,
    desc: "Serviços",
  },
  {
    icon: () => <FaIdCard size={20} color="#fff" />,
    desc: "Perfil",
  },
  {
    icon: () => <FaFileAlt size={20} color="#fff" />,
    desc: "Novo Serviço",
  },
];

export function Dashboard() {
  return (
    <Container>
      <SideBar>
        <div>
          <Logo>
            <img src={logoSVG} alt="Logo iClean" />
            <strong>iClean</strong>
            <div />
          </Logo>

          <Options>
            {staticSideBar.map((option) => (
              <li>
                <div>{option.icon()}</div>
                <span>{option.desc}</span>
              </li>
            ))}
          </Options>
        </div>
        <div style={{ height: "100px" }}>
          <Helper>
            <span>SingOut</span>
            <FaSignOutAlt size={28} color="var(--primary)" />
          </Helper>
        </div>
      </SideBar>
      <Content>
        <Title> Voltar </Title>

        {dashOptions.map((dash) => (
          <PrimaryCard left={dash.id === 1}>
            <span>
              <h1>{dash.title}</h1>
              <p>{dash.explicacao}</p><br />
              <p>cadastre um novo serviço {dash.iconDash()}</p> 
            </span>
            <img src={dash.src} alt={dash.alt} />
          </PrimaryCard>
        ))}

        <SecondCard>
          <div></div>
          <div></div>
        </SecondCard>
        
      </Content>
    </Container>
  );
}
