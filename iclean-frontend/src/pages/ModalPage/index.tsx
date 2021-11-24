import { useParams } from 'react-router-dom';

import { Header } from "../../components/Header";
import { InviteForService } from '../../components/InviteForService';
import { MadeInvitation } from '../../components/MadeInvitation';
import { OpenServices } from "../../components/OpenServices";

import { Container, Content } from "./styles";

interface IParams {
  type: string;
  user: string;
}

export function ModalPage() {

  const params: IParams = useParams();

  function renderModal() {

    if (params.user === "candidata") {

      if (params.type === "inviteForService") {
        return <InviteForService />
      } else if (params.type === "madeInvitation") {
        return <MadeInvitation />
      }
    } else {
      return "macaco"
    }

  }

  return (
    <Container>
      <Header />
      <Content>
        {params.type === "inviteForService" ? (
          <InviteForService />
        ) : (
          <MadeInvitation />
        )}
      </Content>
    </Container>
  )
}
