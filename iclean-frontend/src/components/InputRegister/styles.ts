import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0.7rem 0;

  label {
    font-weight: 500;
    font-size: 1.2rem;
  }

  input {
    padding: 0.5rem 1rem;

    background-color: var(--shape);
    border: 1px solid var(--primary);

    width: 100%;

    font-size: 1.2rem;
    font-weight: 500;

    border-radius: 4px;
  }
`;
