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

interface IUserProps {
  nome: string;
}

const avaliations = [
  {
    id: 1,
    img: avaliacao1,
  },
  {
    id: 2,
    img: avaliacao2,
  },
  {
    id: 3,
    img: avaliacao3,
  }
]

interface IParams {
  idProprietaria: string;
}

export function Profile() {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const params: IParams = useParams();

  useEffect(() => {
    api.get(`/proprietarias/${params.idProprietaria}`).then(res => {
      setUser(res.data);
    })
  }, []);

  return (
    <Container>
      <Header />
      <Content>
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
        <Description>
          <h1>Descrição</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci tellus, pretium vitae malesuada eget, dictum sed quam. Cras placerat ornare rhoncus. Donec a augue et erat maximus commodo id non sem.</p>
        </Description>
        <Praise>
              {avaliations.map(avaliation => (
                <div key={avaliation.id}>
                  <img src={avaliation.img} alt="" />
                </div>
              ))}
        </Praise>
      </Content>
    </Container>
  )
}
