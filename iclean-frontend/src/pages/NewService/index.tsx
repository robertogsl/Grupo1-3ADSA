import { FaFacebook } from 'react-icons/fa';

import { MultiplesCheck } from '../../components/MultiplesCheck';
import { ItemMultiplesCheckProps } from '../../types/multiplesCheck';

import { Container, Content } from './styles';

const items: ItemMultiplesCheckProps[] = [
  {
    title: "Limpeza padrão",
    Icon: <FaFacebook />
  },
  {
    title: "Limpeza pesada",
    Icon: <FaFacebook />
  },
  {
    title: "Passar roupa",
    Icon: <FaFacebook />
  }
]

export function NewService() {
  return (
    <Container>
      <Content>
        <MultiplesCheck items={items} title="Escolha um serviço" />
      </Content>
    </Container>
  )
}
