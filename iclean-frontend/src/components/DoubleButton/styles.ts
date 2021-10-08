import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-top: 1.4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.6rem;
`;

interface ButtonProps {
  main: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;

  background-color: var(--primary);
  color: var(--shape);
  border: 0;

  svg {
    margin-left: 1rem;
  }

  ${props => !props.main && css`
    background-color: var(--shape);
    color: var(--primary);
    border: 1px solid var(--primary);

    svg {
      margin-right: 1rem;
    }
  `};

  font-size: 1.1rem;
  font-weight: 500;

  border-radius: 4px;


  transition: filter .3s;

  &:hover {
      filter: brightness(0.9);
  }
`;
