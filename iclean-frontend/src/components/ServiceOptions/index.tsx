import { ItemServiceOptionsProps } from '../../types/serviceOptions';

import { Container, Item } from './styles';

interface IServiceOptionsProps {
  title: string;
  items: ItemServiceOptionsProps[];
  idChecked: number;
  fnCheck(id: number): void;
}

export function ServiceOptions({ title, items, fnCheck, idChecked }: IServiceOptionsProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        {items.map(item => (
          <Item key={item.id} isChecked={idChecked === item.id} onClick={() => fnCheck(item.id)}>
            {item.icon && (item.icon)()}
            <span>{item.title}</span>
          </Item>
        )
        )}
      </ul>
    </Container>
  )
}
