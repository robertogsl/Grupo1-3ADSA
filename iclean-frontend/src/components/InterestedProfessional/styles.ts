import styled from "styled-components";

export const Title = styled.div`
  color: white;
  font-size: 1.8rem;
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

  img {
      max-width: 4.5rem;
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

