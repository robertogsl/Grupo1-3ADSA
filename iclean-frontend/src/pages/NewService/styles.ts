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

  max-width: 1120px;
  width: 100%;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > button {
    width: 100%;
    height: 3.5rem;

    font-size: 1.2rem;
    color: white;

    background-color: var(--primary);
    border: 0;
    border-radius: 4px;

    margin-bottom: 2rem;
  }
`;

export const NumberControllerContainer = styled.div`
  display: flex;

  margin-top: 2rem;

  & > div:first-of-type {
    margin-right: 2rem;
  }
`;


export const ContainerMap = styled.div`
  margin-top: 2rem;
`;

export const ContainerInputLine = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 2rem;
`;

export const ContainerMapAndInputs = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  grid-gap: 1.2rem;
`;

export const ContainerInputs = styled.div`
  margin-left: 0.9rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
