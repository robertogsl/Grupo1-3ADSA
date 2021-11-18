import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;
  padding: .6rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  text-decoration: none;
  color: black;

  svg {
    margin-right: 0.6rem;
  }
`;
