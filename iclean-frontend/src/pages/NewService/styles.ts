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
`;

export const NumberControllerContainer = styled.div`
  display: flex;

  margin-top: 2rem;

  & > div:first-of-type {
    margin-right: 2rem;
  }
`;

interface ITypography {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

export const Typography = styled.span<ITypography>`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight}px;
`;
