import { useParams } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Candidature } from '../../components/Candidature';
import { MadeInvitation } from '../../components/MadeInvitation';

import { Container, Content } from "./styles";

interface IParams {
  type: string;
  user: string;
}

export function ModalPage() {

  const params: IParams = useParams();

  function renderModal() {

    if (params.user === "candidata") {
      if (params.type === "convites") {
        return <MadeInvitation />
      } else if (params.type === "convidar") {
        return <Candidature />
      }
    } else {
      return <h1>macaco</h1>
    }

  }

  return (
    <Container>
      <Header />
      <Content>
        {renderModal()}
      </Content>
    </Container>
  )
}
