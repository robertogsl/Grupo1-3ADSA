import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

interface IStepProp {
  current: number;
  own: number;
  totalSteps: number;
}

export const Step = styled.div<IStepProp>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  margin: 0 3rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.current === props.own && css`
    background-color: var(--primary);
    color: var(--shape);
    border: 1px solid var(--primary);
  `}

  ${props => props.current > props.own && css`
    background-color: #55FF00;
  `}

  ${props => props.current < props.own && css`
    border: 1px solid var(--primary);
  `}

  ${props => props.own === 1 && css`
    &::after {
      /* content: "";
      position: absolute;
      width: 3rem;
      height: 2px;

      background-color: var(--primary);

      top: calc(50% - 1px);
      right: calc(-3rem - 1px); */
    }
  `}

  ${props => props.own === props.totalSteps && css`
    /* &::after {
      content: "";
      position: absolute;
      width: 3rem;
      height: 2px;

      background-color: var(--primary);

      top: calc(50% - 1px);
      left: calc(-3rem - 1px);
    } */
  `}

  ${props => props.own !== props.totalSteps && props.own > 1 && css`
  &::after {
    /* content: "";
    position: absolute;
    width: 3rem;
    height: 2px;

    background-color: var(--primary);

    top: calc(50% - 1px);
    left: calc(-3rem - 1px); */
  }

  &::before {
    /* content: "";
    position: absolute;
    width: 3rem;
    height: 2px;

    background-color: var(--primary);

    top: calc(50% - 1px);
    right: calc(-3rem - 1px); */
  }
  `}

  &:nth-child(${props => props.own !== 1 ? Math.ceil(props.totalSteps / 2) : 100})::after {
    content: "";
    position: absolute;
    width: 6rem;
    height: 2px;

    background-color: var(--primary);

    top: calc(50% - 1px);
    left: calc(-6rem - 1px);
  }

  &:nth-child(${props => Math.ceil(props.totalSteps / 2)})::before {
    content: "";
    position: absolute;
    width: 6rem;
    height: 2px;

    background-color: var(--primary);

    top: calc(50% - 1px);
    right: calc(-6rem - 1px);
  }

  &:nth-child(4)::before {
    content: "";
    position: absolute;
    width: 6rem;
    height: 2px;

    background-color: var(--primary);

    top: calc(50% - 1px);
    left: calc(-6rem - 1px);
  }
`;
