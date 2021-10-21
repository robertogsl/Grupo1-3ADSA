import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid blue;

  width: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-gap: 2rem;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: .8rem;

      span {
        font-size: 1.2rem;
        flex: 1;
        text-align: center;
      }

      border: 1px solid red;
    }
  }
`;
