import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { useRegister } from '../../hooks/register';

import { Container, Button } from './styles';

interface IDoubleButtonProps {
  isFinalStep?: boolean;
  onSubmitForm?: () => void;
}

export function DoubleButton({ isFinalStep = false, onSubmitForm }: IDoubleButtonProps) {
  const { changeStep } = useRegister();

  const functionRenderedOnSecondButton = isFinalStep ? onSubmitForm : () => changeStep('next');

  return (
    <Container>
      <Button main={false} onClick={() => changeStep('back')}>
        <FiArrowLeft size={18} color="#5762C3" />
        Voltar
      </Button>
      <Button main={true} onClick={functionRenderedOnSecondButton}>
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
