import {
  FaStore,
  FaCity,
  FaIdCard,
  FaFileAlt,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronCircleLeft,
  FaChevronRight,
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
  ChildrenCards,
} from "./styles";

import logoSVG from "../../assets/Logo.svg";
import foguete from "../../assets/foguete.png";
import mapa from "../../assets/mapa.png";
import tasks from "../../assets/tasks.png";
import cards from "../../assets/card.png";

interface IScardsDash {
  id: number;
  title: string;
  desc: string;
  src: string;
  alt: string;
  path: string;
  iconDash: () => JSX.Element;
}

const dashOptions: IScardsDash[] = [
  {
    id: 1,
    title: "Novo serviço",
    desc: "Cadastre os seus imóveis e consiga a melhor limpeza em menos tempo",
    src: foguete,
    alt: "foguete",
    path: "Cadastre um novo serviço",
    iconDash: () => <FaChevronRight size={13} color="#fff" />,
  },
  {
    id: 2,
    title: "Busca na sua área",
    desc: "Descubra os profissionais mais proximos da sua localização",
    src: mapa,
    alt: mapa,
    path: "Descubra profissionais na região",
    iconDash: () => <FaChevronRight size={13} color="#fff" />,
  },
];

interface IScardsSecondDash {
  id: number;
  title: string;
  desc: string;
  src: string;
  alt: string;
  iconDash: () => JSX.Element;
}

const secondDashOptions: IScardsSecondDash[] = [
  {
    id: 1,
    title: "Perfil",
    desc: "Confira o seu perfil",
    src: cards,
    alt: cards,
    iconDash: () => <FaChevronRight size={13} color="#fff" />,
  },
  {
    id: 2,
    title: "Serviços",
    desc: "Veja os serviços abertos",
    src: tasks,
    alt: tasks,
    iconDash: () => <FaChevronRight size={13} color="#fff" />,
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
        <div style={{ height: "fit-content" }}>
          <Helper>
            <span>SingOut</span>
            <FaSignOutAlt size={28} color="var(--primary)" />
          </Helper>
        </div>
      </SideBar>
      <Content>
        <Title> <FaChevronCircleLeft size={20} color="black" /> Voltar </Title>

        {dashOptions.map((dash) => (
          <PrimaryCard left={dash.id === 1}>
            <span>
              <h1>{dash.title}</h1>
              <p>{dash.desc}</p>
              <br />
              <p>{dash.path} {dash.iconDash()}</p>
            </span>
            <img src={dash.src} alt={dash.alt} />
          </PrimaryCard>
        ))}

        <ChildrenCards>
        {secondDashOptions.map((dash) => (
          <SecondCard left={dash.id === 1}>
            <span>
              <h1>{dash.title}</h1>
              <p>{dash.desc} {dash.iconDash()}</p>
            </span>
            <img src={dash.src} alt={dash.alt}/>
          </SecondCard>
        ))}
        </ChildrenCards>
      </Content>
    </Container>
  );
}
