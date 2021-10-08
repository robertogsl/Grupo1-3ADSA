import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  & > form {
    width: 100%;

    max-width: 500px;
    align-self: center;
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
