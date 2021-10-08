import { useCallback } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { useRegister } from '../../../hooks/register';

import step1PNG from '../../../assets/step1-1.png';
import step2PNG from '../../../assets/step1-2.png';

import { Container, OptionsContainer, Option } from './styles';

export function Options() {
  const { changeStep, handleChooseUserType, getUserType } = useRegister();

  const handleSelectOption = useCallback((option: number) => {
    if (getUserType() !== 0 && getUserType() !== option) {
      handleChooseUserType(option);
    } else if (getUserType() !== 0) {
      handleChooseUserType(0);
    } else {
      handleChooseUserType(option);
    }
  }, [getUserType, handleChooseUserType]);

    return (
      <Container>
        <h1>Você está: </h1>

        <OptionsContainer>
          <Option option={1} optionSelected={getUserType()}>
            <span>Procurando uma doméstica</span>
            <div onClick={() => handleSelectOption(1)}>
              <img src={step1PNG} alt="Image 1" />
            </div>
          </Option>
          <Option option={2} optionSelected={getUserType()}>
            <span>Procurando um trabalho</span>
            <div onClick={() => handleSelectOption(2)}>
              <img src={step2PNG} alt="Image 2" />
            </div>
          </Option>

          <button onClick={() => changeStep('next')} disabled={getUserType() === 0}>
            Próximo
            <FiArrowRight size={18} color="#fff" />
          </button>
        </OptionsContainer>
      </Container>
    );
};
