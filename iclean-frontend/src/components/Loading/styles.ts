import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Container = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid var(--primary); /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export const ContainerLoading = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
