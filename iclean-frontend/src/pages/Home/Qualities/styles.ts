import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1120px;
  padding: 4rem 1rem 4rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  div {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 3.4rem;
    }
  }
`;
