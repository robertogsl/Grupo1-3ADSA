import styled, { css } from 'styled-components';

interface ICardProps {
  isChecked: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  width: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-gap: 2rem;
  }
`;

export const Item = styled.li<ICardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: .8rem;

  border: 1px solid #E4E3E3;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.07);

  cursor: pointer;

  ${props => props.isChecked && css`
    background-color: #5762C3;

    span {
      color: white;
    }
  `}

  span {
    font-size: 1.2rem;
    flex: 1;
    text-align: center;
  }
`;
