import styled from "styled-components";


export const Format = styled.div`
  color: white;
  display: flex;
  flex-direction: row;

  span{
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1.3rem;
  }

  p{
    margin-left: 0.8rem;
  }
`;
export const Title = styled.h1`
  font-size: 1.8rem;
`;

export const Subtitle = styled.h2`
  font-size: 2.3rem;
`;

export const Line = styled.div`
  background-color: white;
  height: 0.2rem;
  width: 80%;
  margin: 0.8rem 0rem;
`;

export const Icon = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;

  span{
    font-size: 1.1rem;
    margin-left: 0.7rem;
    font-weight: bold;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-weight: normal;
    font-size: 1.3rem;
    /* margin: 0.3rem 0.1rem; */
  }
  div {
    /* padding-top: 4rem; */
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  border: none;
  color: #5762c3;
  font-weight: bold;
  font-size: 1.2rem;
  height: 4rem;
  width: 13rem;
  border-radius: 0.25rem;
  box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25);
`;
