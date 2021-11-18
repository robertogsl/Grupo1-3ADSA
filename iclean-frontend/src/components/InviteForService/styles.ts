import styled from "styled-components";

export const Content = styled.div`
color: white;
`;

export const Format = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  img{
      max-height: 8rem;
  }
  p{
      font-size: 2rem;
      font-weight: bold;
  }
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
