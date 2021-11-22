import styled from "styled-components";

export const Format = styled.div`
  color: white;
  display: flex;
  flex-direction: row;

  span {
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  p {
    margin-left: 0.8rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;

  span {
    margin-left: 0.65rem;
    font-size: 1.8rem;
    font-weight: 100;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 100;
`;

export const Line = styled.div`
  background-color: white;
  height: 0.2rem;
  width: 80%;
  margin: 0.5rem 0rem;
`;

export const Icon = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1.1rem;
    margin-left: 0.7rem;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  color: white;
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  button {
    margin: 0 auto;
    border: none;
    color: #5762c3;
    font-weight: bold;
    font-size: 1.2rem;
    height: 3.87rem;
    width: 16.25rem;
    border-radius: 0.25rem;
    box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25);
  }
`;
