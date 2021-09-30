import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;

  flex: 1;
`;

export const Content = styled.div`
  flex: 1;

  max-width: 1120px;
  padding: 1rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 540px;
  min-width: 720px;

  h1 {
    font-size: 1.4rem;
    align-self: flex-start;

    margin: 1.4rem 0;
  }
`;
