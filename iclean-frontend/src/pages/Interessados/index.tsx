import { useParams } from 'react-router-dom';

import { Header } from "../../components/Header"

import { Container, Content} from "./styles";

import { InterestedProfessional } from '../../components/InterestedProfessional';

interface IParams {
  idTrabalho: string;
}

export function Interessados() {

  const params: IParams = useParams();

  return (
    <Container>
      <Header />
      <Content>
      <InterestedProfessional idTrabalho={params.idTrabalho} />
      </Content>
    </Container>
  )
}
