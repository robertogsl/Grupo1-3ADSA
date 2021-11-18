import styled from 'styled-components';

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

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 1120px;
  width: 100%;

  padding: 0 1rem;

  min-height: 540px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  background-color: rgba(87, 98, 195, 0.7);

  position: relative;
  top: -6rem;

  border-radius: .5rem;

  div:first-of-type {
    flex: 1;

    h1 {
      color: white;
      font-size: 2.6rem;
      font-weight: 500;
    }

    ul {
      display: flex;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;

  width: 100%;

  background: rgba(87, 98, 195, 0.2);
  position: relative;
  top: -5.6rem;

  border-radius: .5rem;
`;

export const Praise = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: -4.6rem;

  div {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    background: rgba(87, 98, 195, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 1rem;
  }
`;
