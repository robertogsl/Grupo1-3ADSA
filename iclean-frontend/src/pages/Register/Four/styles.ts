import styled from 'styled-components';
import { Map } from 'react-leaflet';

export const Container = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;

  & > div {
    align-self: center;
    width: 100%;

    max-width: 500px;

    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    font-size: 1.4rem;
    align-self: flex-start;

    margin: 1.4rem 0;
  }
`;

interface IDoubleInputProps {
  sizeOfFirst: number;
}

export const DoubleInput = styled.div<IDoubleInputProps>`
  display: grid;
  grid-template-columns: ${props => props.sizeOfFirst}fr 1fr;

  grid-gap: 1rem;
`;
