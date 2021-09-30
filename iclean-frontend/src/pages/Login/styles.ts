import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;

  flex: 1;
`;

export const Content = styled.div`
  flex: 1;

  max-width: 1120px;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  min-height: 540px;

  img {
    align-self: center;
  }

  form {
    align-self: center;
    margin: 0 auto;

    h1 {
      font-size: 3rem;
      line-height: 2.4rem;
    }

    h1 + span {
      a {
        color: var(--primary);
        cursor: pointer;
      }
    }

    strong {
      display: block;

      font-size: 0.9rem;
      color: var(--primary);

      text-align: center;

      font-weight: 400;

      margin-top: 1rem;
    }

    button[type=submit] {
      width: 100%;

      padding: 0.5rem 1rem;

      background-color: var(--primary);
      color: var(--shape);
      border: 0;

      font-size: 1.2rem;
      font-weight: 500;

      margin-top: 0.6rem;

      border-radius: 4px;
    }

    button + span {
      display: block;

      text-align: center;

      margin-top: 1rem;

      position: relative;
    }

    button + span:before {
      content: "";

      width: 120px;
      height: 1px;

      background-color: var(--primary);

      position: absolute;
      top: 50%;
      left: 0;
    }

    button + span:after {
      content: "";

      width: 120px;
      height: 1px;

      background-color: var(--primary);

      position: absolute;
      top: 50%;
      right: 0;
    }

    div.buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 1rem;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 4px;

        margin: 0 1rem;

        width: 100px;
        height: 60px;

        border: 1px solid var(--primary);
      }
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.6rem;

  label {
    font-size: 1.2rem;
    font-weight: 500;
  }

  input {
    padding: 0.5rem 1rem;

    background-color: var(--shape);
    color: var(--shape);
    border: 1px solid var(--primary);

    font-size: 1.2rem;
    font-weight: 500;

    border-radius: 4px;
  }
`;
