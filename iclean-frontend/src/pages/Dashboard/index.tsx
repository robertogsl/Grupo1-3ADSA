import {
  FaStore,
  FaCity,
  FaIdCard,
  FaFileAlt,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

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
import { BackButton } from "../../components/BackButton";

interface IScardsDash {
  id: number;
  title: string;
  desc: string;
  src: string;
  alt: string;
  path: string;
  iconDash: () => JSX.Element;
  titleContract: string;
  descContract: string;
  pathContract: string;
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

    titleContract: "Procurar novo serviço",
    descContract: "Procure os imóveis disponiveis para limpeza",
    pathContract: "Procurar um novo serviço",
  },
  {
    id: 2,
    title: "Busca na sua área",
    desc: "Descubra os profissionais mais proximos da sua localização",
    src: mapa,
    alt: mapa,
    path: "Descubra profissionais na região",
    iconDash: () => <FaChevronRight size={13} color="#fff" />,
    titleContract: "Serviços candidatados",
    descContract: "Veja os serviços aos quais você se candidatou",
    pathContract: "Veja detalhes dos serviços",
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
  const { getUserType, signOut } = useAuth();
  const history = useHistory();

  const isOwner = getUserType() === 0;

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
            <span style={{ cursor: "pointer" }} onClick={signOut}>SingOut</span>
            <FaSignOutAlt size={28} color="var(--primary)" />
          </Helper>
        </div>
      </SideBar>
      <Content>
        {dashOptions.map((dash) => {
          const fn = dash.id === 2 && isOwner ? () => history.push("/listOnMap") : () => history.push("/newService")

          return (
            <PrimaryCard onClick={fn} left={dash.id === 1}>
              <span>
                <h1>{isOwner ? dash.title : dash.titleContract}</h1>
                <p>{isOwner ? dash.desc : dash.descContract}</p>
                <br />
                <p>
                  {isOwner ? dash.path : dash.pathContract} {dash.iconDash()}
                </p>
              </span>
              <img src={dash.src} alt={dash.alt} />
            </PrimaryCard>
          )
        })}

        {isOwner ? (
          <ChildrenCards>
            {secondDashOptions.map((dash) => {
              const fn = dash.id === 1 ? () => history.push("/profile") : () => history.push("/dashboard")

              return (
                <SecondCard onClick={fn} left={dash.id === 1}>
                  <span>
                    <h1>{dash.title}</h1>
                    <p>
                      {dash.desc} {dash.iconDash()}
                    </p>
                  </span>
                  <img src={dash.src} alt={dash.alt} />
                </SecondCard>
              )
            })}
          </ChildrenCards>
        ) : (
          <PrimaryCard left={true}>
            <span>
              <h1>Convites de serviços</h1>
              <p>
                Veja os convites para serviços recebidos{" "}
                <FaChevronRight size={13} color="#fff" />
              </p>
            </span>
            <img src={tasks} alt="tasks" />
          </PrimaryCard>
        )}
      </Content>
    </Container>
  );
}
