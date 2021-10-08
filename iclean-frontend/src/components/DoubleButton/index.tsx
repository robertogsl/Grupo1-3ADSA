import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { useRegister } from '../../hooks/register';

import { Container, Button } from './styles';

interface IDoubleButtonProps {
  isFinalStep?: boolean;
}

export function DoubleButton({ isFinalStep = false }: IDoubleButtonProps) {
  const { changeStep } = useRegister();

  return (
    <Container>
      <Button main={false} onClick={() => changeStep('back')}>
        <FiArrowLeft size={18} color="#5762C3" />
        Voltar
      </Button>
      <Button main={true} onClick={() => changeStep('next')}>
        {isFinalStep ? "Cadastrar" : (
          <>
            Próximo
            <FiArrowRight size={18} color="#fff" />
          </>
        )}

      </Button>
    </Container>
  )
}
