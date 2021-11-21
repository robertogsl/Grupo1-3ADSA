import styled from "styled-components";

export const Container = styled.div`
  background: #5762c3;
  box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 2rem;
`;

export const Content = styled.div`
  color: white;
`;

export const Format = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  & > img{
      height: 6rem;
  }

  div + div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: .6rem 0;

    div {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;

      /* background: rgba(87, 98, 195, 1); */
      background-color: #CDD0ED;

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 1rem;

      padding: 0.6rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  p {
      font-size: 1.6rem;
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
