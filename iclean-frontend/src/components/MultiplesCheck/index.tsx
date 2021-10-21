import { FiMonitor } from 'react-icons/fi';

import { ItemMultiplesCheckProps } from '../../types/multiplesCheck';

import { Container } from './styles';

interface IMultiplesCheckProps {
  title: string;
  items: ItemMultiplesCheckProps[];
}

export function MultiplesCheck({ title, items }: IMultiplesCheckProps) {
  return (
    <Container>
      <h1>{title}</h1>
          <ul>
            {items.map(item => {
              const Icon = item.Icon;

              return (
                <li>
                  <Icon />
                  </li>
              )
            })}
            <li>
              <FiMonitor size={32} color="#333" />
              <span>Limpeza padrão</span>
            </li>
            <li>
              <FiMonitor size={32} color="#333" />
              <span>Limpeza pesada</span>
            </li>
            <li>
              <FiMonitor size={32} color="#333" />
              <span>Passar roupa</span>
            </li>
          </ul>
    </Container>
  )
}
