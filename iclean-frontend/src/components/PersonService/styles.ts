import styled from "styled-components";

// export const Container = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding-top: 1.5rem;
`;

export const Title = styled.div`
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Space = styled.div`
  width: 10%;
`;

export const LinePurple = styled.div`
  background-color: #5762c3;
  height: 0.2rem;
  width: 80%;
  margin: 0.5rem 0rem;
`;

export const FirstCard = styled.div`
  background: #5762c3;
  color: white;
  max-height: 90vh;
  width: 100%;
  max-width: 30rem;
  box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 2rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const SecondCard = styled.div`
  background: #fff;
  color: #5762c3;
  min-height: 85vh;
  max-height: 90vh;
  width: 100%;
  max-width: 30rem;
  box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 2rem;
  overflow: auto;
  text-align: end;

  &::-webkit-scrollbar {
    width: 0px;
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
    margin-right: 1rem;
    width: 10rem;
    border-radius: 0.25rem;
    box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25);
  }
`;
