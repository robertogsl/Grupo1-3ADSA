import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

import bgUser from '../../assets/bg-user.svg';
import user1 from '../../assets/user1.svg';
import starSVG from '../../assets/star.svg';
import medalSVG from '../../assets/medalha.svg';
import avaliacao1 from '../../assets/avaliacao-1.svg';
import avaliacao2 from '../../assets/avaliacao-2.svg';
import avaliacao3 from '../../assets/avaliacao-3.svg';

import { api } from '../../services/api';

import { Header } from '../../components/Header';

import { Container, Content, Main, Description, Praise } from './styles';
import { BackButton } from '../../components/BackButton';
import { Loading } from '../../components/Loading';

interface IUserProps {
  nome: string;
}

const avaliations = [
  {
    id: 1,
    img: avaliacao1,
    nome: "Amigável"
  },
  {
    id: 2,
    img: avaliacao2,
    nome: "Receptiva"
  },
  {
    id: 3,
    img: avaliacao3,
    nome: "Boa conversa"
  }
]

interface IParams {
  idProprietaria: string;
}

export function Profile() {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [isLoading, setIsLoading] = useState(false);

  const params: IParams = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.get(`/proprietarias/${params.idProprietaria}`).then(res => {
      setUser(res.data);
      setIsLoading(false);
    })
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {isLoading ? <Loading /> : (
          <>
          <BackButton />
            <img src={bgUser} alt="" />
            <Main>
              <img src={user1} alt="" />
              <div>
                <h1>{user.nome}</h1>
                <ul>
                  {Array.from({ length: 4 }).map(() => (
                    <li><img src={starSVG} alt="Estrela" /></li>
                  ))}
                </ul>
              </div>
              <div>
                {Array.from({ length: 3 }).map(() => (
                  <img src={medalSVG} alt="Medalha" />
                ))}
              </div>

            </Main>
            <Praise>
              {avaliations.map(avaliation => (
                <>
                  <div key={avaliation.id}>
                    <img src={avaliation.img} alt="" />
                  </div>
                  <h3>
                    {avaliation.nome}
                  </h3>
                </>
              ))}
            </Praise>
          </>
        )}
      </Content>
    </Container>
  )
}
