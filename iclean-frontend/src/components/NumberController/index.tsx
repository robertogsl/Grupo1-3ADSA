import { FiPlus, FiMinus } from 'react-icons/fi';

import { Container } from './styles';

interface INumberControllerProps {
  title: string;
  counter: number;
  fnCounter(operation: string): void;
}

export function NumberController({ title, counter, fnCounter }: INumberControllerProps) {
  return (
    <Container>
      <button onClick={() => fnCounter("decrease")}>
        <FiMinus size={24} color="#000" />
      </button>
      <div>
        <span>{counter} {title}</span>
      </div>
      <button onClick={() => fnCounter("increase")}>
        <FiPlus size={24} color="#000" />
      </button>
    </Container>
  )
}
