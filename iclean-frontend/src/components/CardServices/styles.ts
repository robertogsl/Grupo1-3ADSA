import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  margin: 0 auto;
    width: 83%;
    display: flex;
    
    span{
      width : 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 0.8rem;
    }

    p{
      font-weight: 700;
      font-size: 1.5rem;
      margin-left: 0.7rem;
    }
`;

export const Content = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0rem 1.5rem;
  margin: 0 auto;
  padding: 1rem;
  color: white;
`;

export const CardService = styled.div`
  background-color: var(--primary);
  height: 12.5rem;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1rem solid #4750a0;
  justify-content: center;

  span {
    height: fit-content;
    margin: 3rem 0.2rem;
  }
`;

export const Candidacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardColorido = styled.div`
  display: flex;
  flex-direction: row;
  width: 22%;
  height: 0.7rem;
  border-radius: 5px;
  background: rgba(196, 196, 196, 0.5);
`;

export const CardApagado = styled.div`
  display: flex;
  flex-direction: row;
  width: 22%;
  height: 0.7rem;
  background-color: white;
  border-radius: 5px;
`;
