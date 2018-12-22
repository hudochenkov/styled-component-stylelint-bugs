import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 15px;
  font-weight: 700;

  &:hover,
  &.active {
    color: red;

    svg {
      fill: red;
    }
  }
`;

export const LinkIcon = styled.div`
  flex: none;

  svg {
    width: 15px;
    height: 15px;
  }
`;
