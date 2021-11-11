import { IAdditionalServiceProps } from '../../types/additionalServices';
import { Container, AdditionalServicesContainer, AdditionalServiceItem } from './styles';

interface IMultiplesCheckProps {
  title: string;
  items: IAdditionalServiceProps[];
  checkFn(id: number): void;
  state: number[];
}

export function MultiplesCheck({ title, items, checkFn, state }: IMultiplesCheckProps) {
  return (
    <Container>
      <h1>{title}</h1>

      <AdditionalServicesContainer>
        {items.map(item => {

          const itemChecked = state.some(stateItem => stateItem === item.id);

          return (
            <AdditionalServiceItem onClick={() => checkFn(item.id)} serviceChecked={itemChecked}>
              <button />
              <div>
                <span key={item.id}>{item.title}</span>
              </div>
            </AdditionalServiceItem>
          )
        })}
      </AdditionalServicesContainer>
    </Container>
  )
}
