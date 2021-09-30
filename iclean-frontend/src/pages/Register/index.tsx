import { Header } from "../../components/Header";
import { Steps } from "../../components/Steps";

import { Container, Content } from './styles';
import { One } from "./One";

import { useRegister } from '../../hooks/register';

export function Register() {
  const { currentStep } = useRegister();

  return (
    <Container>
      <Header />

      <Content>
        <Steps steps={[1, 2, 3,]} step={currentStep} />

        <One />

      </Content>
    </Container>
  )
}
