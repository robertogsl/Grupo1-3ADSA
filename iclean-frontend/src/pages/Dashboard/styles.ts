import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  background-color: white;
`;

export const SideBar = styled.div`
  background-color: white;
  max-height: 100vh;
  width: 18.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.div`
  img {
    width: 3rem;
  }
  strong {
    padding-left: 1rem;
    font-size: 2rem;
  }

  display: inline-flex;
  padding: 1rem 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 0.01rem;
    bottom: -0.6rem;
    left: 10%;

    background-color: #f5f5f5;
  }
`;

export const Options = styled.ul`
  padding: 1.5rem 0.5rem 1.5rem 2rem;
  li {
    padding: 1rem;
    display: inline-flex;
    color: #67748e;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
    }
  }
  div {
    background-color: var(--primary);
    padding: 0.5rem;
    border-radius: 8px;
  }
  span {
    padding: 0.3rem 0.8rem;
    font-size: 1rem;
  }
`;

export const Helper = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  color: #67748e;

  span {
    font-size: 1.8rem;
    margin-right: 0.9rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
`;

interface PrimaryCardProps {
  left: boolean;
}

export const PrimaryCard = styled.button<PrimaryCardProps>`
  display: flex;
  flex-direction: row;
  text-align: justify;
  justify-content: space-between;
  width: 80%;
  height: 12.5rem;
  color: white;
  background-color: var(--primary);
  margin-bottom: 1rem;
  box-shadow: -20px 20px 35px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  border: none;

  span {
    padding: 1rem 2.2rem;
    font-size: 1.2rem;
    height: fit-content;
  }

  ${(props) =>
    !props.left &&
    css`
      flex-direction: row-reverse;
      text-align: right;

      span {
        padding: 1rem 2.2rem;
        font-size: 1.2rem;
        height: fit-content;
      }
    `}

  p {
    font-size: 1.1rem;
  }

  img {
    padding: 0rem 3.5rem;
    height: 12.5rem;
  }
`;

export const ChildrenCards = styled.div`
  width: 80%;
  display: inline-flex;
  justify-content: space-between;
`
interface SecondCardProps {
  left: boolean;
}

export const SecondCard = styled.button<SecondCardProps>`
  color: white;
  display: flex;
  flex-direction: row;
  width: 49%;
  height: 12.5rem;
  justify-content: space-between;
  background-color: var(--primary);
  text-align: justify;
  margin-bottom: 1rem;
  box-shadow: -20px 20px 35px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  border: none;
  padding: 1.4rem 2.2rem;

  img {
    height: 10rem;
  }

  span {
    font-size: 1.2rem;
    min-height: 9rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-size: 1rem;
    width: fit-content;
  }

  ${(props) =>
    !props.left &&
    css`
      flex-direction: row-reverse;
      text-align: right;
    `}
`;

export const ExIn = styled.div`
  display: flex;
`
