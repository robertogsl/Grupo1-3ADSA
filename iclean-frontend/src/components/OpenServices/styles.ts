import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Content = styled.div``;

export const CardInvite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
  min-height: 4.5rem;
  background-color: white;
  border-radius: 4px;

  div{
      width: 23%;
  }

  img {
      max-width: 4.5rem;
      padding: 0rem 1rem;
      margin-left: 1rem;
  }

  span {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    padding: 0rem 1rem;
    font-size: 1.3rem;
  }
`;
