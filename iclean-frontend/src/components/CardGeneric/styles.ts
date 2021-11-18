import styled, {css} from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

export const Content = styled.div`
  background: #5762c3;
  min-height: 85vh;
  max-height: 90vh;
  width: 100%;
  max-width: 30rem;
  box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 2rem;

  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Icon = styled.div`
    position: absolute;
    right: 31.2%;
    top: 3%;
`