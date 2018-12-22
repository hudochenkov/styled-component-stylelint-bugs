import styled from 'styled-components';
import { ButtonStyled } from '../../button/Button.styled';

export const Left = styled.div`
  a {
    color: red;
  }

  ${ButtonStyled} {
    margin-right: 8px;
  }
`;

export const Right = styled.div`
  a {
    color: blue;
  }

  ${ButtonStyled} {
    margin-left: 8px;
  }
`;
