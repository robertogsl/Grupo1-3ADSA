import {
  FaSignOutAlt,
  FaChevronRight,
  FaStar
} from "react-icons/fa";

import { useHistory, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api'

import {
  Container,
  SideBar,
  Logo,
  Options,
  Helper,
  Content,
  PrimaryCard,
  SecondCard,
  ChildrenCards,
} from "./styles";

import logoSVG from "../../assets/Logo.svg";
import foguete from "../../assets/foguete.png";
import mapa from "../../assets/mapa.png";
import tasks from "../../assets/tasks.png";
import cards from "../../assets/card.png";
import { useEffect, useState } from "react";

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
  proprietaria: {
    id: number;
  }
}

interface IParams {
  idCandidata: string;
  idTrabalho: string;
}

// interface IStypeIcons {
//   icon: () => JSX.Element;
//   desc: string;
// }

// const staticSideBar: IStypeIcons[] = [
//   {
//     icon: () => <FaStore size={20} color="#fff" />,
//     desc: "Dashboard",
//   },
//   {
//     icon: () => <FaCity size={20} color="#fff" />,
//     desc: "Serviços",
//   },
//   {
//     icon: () => <FaIdCard size={20} color="#fff" />,
//     desc: "Perfil",
//   },
//   {
//     icon: () => <FaFileAlt size={20} color="#fff" />,
//     desc: "Novo Serviço",
//   },
// ];

export function Dashboard() {
  const { getUserType, signOut, user } = useAuth();
  const [job, setJob] = useState<IJobs>({} as IJobs)

  const params: IParams = useParams();
  const history = useHistory();

  const isOwner = getUserType() === 0;

  // function Carlos(){
  //   useEffect(() => {
  //     api.get(`/avaliacoes/${Number(params.idTrabalho)}/contratada`).then(res => {
  //       setJob(res.data);
  //     })
  //   }, [])
  // }

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
            <li >
              <div><FaStar size={20} color="#fff" /></div>
              <span>Importar feedbacks</span>
              {/* onClick={Carlos} */}
            </li>
            <li>
              <div><FaStar size={20} color="#fff" /></div>
              <span>Exportar trabalhos</span>
            </li>
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
          // const fn = dash.id === 2 && isOwner ? () => history.push("/listOnMap") : () => history.push("/newService")

          const fn = dash.id === 2 ? isOwner ? () => history.push("/listOnMap") : () => history.push("/candidaturas") : isOwner ? () => history.push("newService") : () => history.push("servicesHired")

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
              const fns = dash.id === 1 ? () => history.push(`/profile/${user.id}`) : () => history.push("/services")

              return (
                <SecondCard onClick={fns} left={dash.id === 1}>
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
          <PrimaryCard onClick={() => history.push("/convites")} left={true}>
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
