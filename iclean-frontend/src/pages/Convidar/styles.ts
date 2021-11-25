import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;

  flex: 1;
`;

export const Title = styled.div`
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
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

  color: white;

  ul {
    list-style: disc;
    padding-left: 2rem;
  }

  h3 {
    margin-top: 1rem;
  }
`;

export const Line = styled.div`
  background-color: white;
  height: 0.2rem;
  width: 80%;
  margin: 0.5rem 0rem;
`;
