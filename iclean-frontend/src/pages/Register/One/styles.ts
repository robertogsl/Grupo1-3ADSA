import styled, { css } from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 1.4rem;
    align-self: flex-start;

    margin: 1.4rem 0;
  }
`;

export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 1.2rem;

  button {
    width: calc(200% + 2rem);

    padding: 0.5rem 1rem;

    background-color: var(--primary);
    color: var(--shape);
    border: 0;

    font-size: 1.2rem;
    font-weight: 500;

    border-radius: 4px;

    transition: filter .3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

interface IOptionProps {
  option: number;
  optionSelected: number;
}

export const Option = styled.div<IOptionProps>`
  div {
    width: 16rem;
    height: 20rem;

    margin-top: 0.3rem;

    ${props => props.option === props.optionSelected && css`
      transition: transform .3s;

      transform: scale(1.04);
      border: 2px solid var(--primary);

      &:hover {
        transform: scale(1.04);
        border: 2px solid var(--primary);
      }
    `}

    ${props => (props.option !== props.optionSelected && props.optionSelected !== 0) && css`
      opacity: 0.6;

      transition: opacity .3s;
    `}

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
