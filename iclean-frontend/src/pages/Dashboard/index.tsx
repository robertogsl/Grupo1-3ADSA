import {
  FaStore,
  FaCity,
  FaIdCard,
  FaFileAlt,
  FaSignOutAlt,
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
            {staticSideBar.map((seila) => (
              <li>
                <div>{seila.icon()}</div>
                <span>{seila.desc}</span>
              </li>
            ))}
          </Options>
        </div>
        <div style={{ height: "100px" }}>
          <Helper>
            <span>SingOut</span>
            <FaSignOutAlt size={32} color="var(--primary)" />
          </Helper>
        </div>
      </SideBar>
      <Content>
        <Title>Home/ Dashboard</Title>

        <PrimaryCard>
          <span>
            <h1>Novo serviço</h1>
            <p>
              Cadastre os seus imóveis e consiga a melhor limpeza em menos tempo
            </p>
          </span>

          <img src={foguete} alt="foguetão" />
        </PrimaryCard>
        <PrimaryCard>
          <img src={mapa} alt="foguetão" />

          <span>
            <h1>Novo serviço</h1>
            <p>
              Cadastre os seus imóveis e consiga a melhor limpeza em menos tempo
            </p>
          </span>
        </PrimaryCard>
        <SecondCard>
          <div>
            <span>
              <img src={cards} alt="foguetão" />
              <h1>Perfil</h1>
            </span>
          </div>
          <div>
            <span>
              <h1>Serviços</h1>
              <img src={tasks} alt="foguetão" />
            </span>
          </div>
        </SecondCard>
      </Content>
    </Container>
  );
}
