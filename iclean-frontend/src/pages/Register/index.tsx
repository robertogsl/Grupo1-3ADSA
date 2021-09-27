import { Header } from "../../components/Header";
import { Steps } from "../../components/Steps";

import { Container } from './styles';

export function Register() {
  return (
    <Container>
      <Header />
      <Steps steps={[1, 2, 3]} />
    </Container>
  )
}
