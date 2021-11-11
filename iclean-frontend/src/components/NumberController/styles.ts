import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  min-width: 22rem;
  background: #F5F5F5;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.07); */

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3.5rem;
    height: 3.5rem;

    background-color: white;
    border: 2px solid #E4E3E3;
    /* border: 0; */
  }

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.3rem;
  }
`;
