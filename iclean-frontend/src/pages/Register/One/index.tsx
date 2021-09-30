import { useState, useCallback } from 'react';

import step1PNG from '../../../assets/step1-1.png';
import step2PNG from '../../../assets/step1-2.png';

import { Container, OptionsContainer, Option } from './styles';

export function One() {
  const [optionSelected, setOptionSelected] = useState(0);

  const handleSelectOption = useCallback((option: number) => {
    if (optionSelected !== 0 && optionSelected !== option) {
      setOptionSelected(option);
    } else if (optionSelected !== 0) {
      setOptionSelected(0);
    } else {
      setOptionSelected(option);
    }
  }, [optionSelected]);

  return (
    <Container>
      <h1>Você está: </h1>

      <OptionsContainer>
        <Option option={1} optionSelected={optionSelected}>
          <span>Procurando uma doméstica</span>
          <div onClick={() => handleSelectOption(1)}>
            <img src={step1PNG} alt="Image 1" />
          </div>
        </Option>
        <Option option={2} optionSelected={optionSelected}>
          <span>Procurando um trabalho</span>
          <div onClick={() => handleSelectOption(2)}>
            <img src={step2PNG} alt="Image 2" />
          </div>
        </Option>

        <button onClick={() => {}}>Próximo passo</button>
      </OptionsContainer>
    </Container>
  );
};
