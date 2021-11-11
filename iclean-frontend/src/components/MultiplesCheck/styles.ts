import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const AdditionalServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem 2rem;
`;

interface IAdditionalServiceItemProps {
  serviceChecked: boolean;
}

export const AdditionalServiceItem = styled.div<IAdditionalServiceItemProps>`
  display: flex;
  align-items: center;

  border: 1px solid #E4E3E3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.07);
  border-radius: 4px;

  cursor: pointer;

  button {
    margin: 0 1.5rem;

    width: 1.5rem;
    height: 1.5rem;

    border-radius: 4px;
    border: 1px solid var(--primary);

    background-color: white;

    ${props => props.serviceChecked && css`
      background-color: var(--primary);
    `}
  }

  div {
    flex: 1;
    height: 3.5rem;

    display: flex;
    align-items: center;
  }
`;
