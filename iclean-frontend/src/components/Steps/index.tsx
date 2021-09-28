import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container, Step } from './styles';

interface IStepsProps {
  steps: number[];
  step: number;
}

export function Steps({ steps, step }: IStepsProps) {

  return (
    <Container>
      {steps.map((stepMap) => (
        <Step own={stepMap} current={step} totalSteps={steps.length}>
          {stepMap >= step ? <span>{stepMap}</span> : <FaCheck size={18} color="#333" />}
        </Step>
      ))}
    </Container>
  )
}
