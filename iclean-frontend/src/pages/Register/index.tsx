import { useCallback } from "react";

import { Header } from "../../components/Header";
import { Steps } from "../../components/Steps";

import { Container, Content } from './styles';
import { Options } from "./Options";

import { useRegister } from '../../hooks/register';
import { One } from "./One";
import { Two } from "./Two";
import { Three } from "./Three";
import { Four } from "./Four";

export function Register() {
  const { currentStep, getUserType } = useRegister();

  const totalRenderSteps = getUserType() === 1 ? [1, 2] : [1, 2, 3, 4];

  const renderStep = useCallback((step: number) => {
    switch (step) {
      case 4:
        return <Four />
      case 3:
        return <Three />
      case 2:
        return <Two />
      case 1:
        return <One />
      default:
        return <Options />
    }
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        {currentStep !== 0 && <Steps steps={totalRenderSteps} step={currentStep} />}

        {renderStep(currentStep)}

      </Content>
    </Container>
  )
}
