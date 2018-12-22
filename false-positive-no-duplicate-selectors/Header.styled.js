import styled from 'styled-components';
import { ButtonStyled } from '../../button/Button.styled';

export const Left = styled.div`
  flex: 1;

  ${ButtonStyled} {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const Right = styled.div`
  flex: none;

  ${ButtonStyled} {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;
