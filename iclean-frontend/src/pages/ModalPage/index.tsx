import { Header } from "../../components/Header";
import { OpenServices } from "../../components/OpenServices";
import { Container, Content } from "./styles";

export function ModalPage() {
  return (
    <Container>
      <Header />
      <Content>
        <OpenServices />
      </Content>
    </Container>
  )
}
