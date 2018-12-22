import styled from 'styled-components';
import colors from '../../../../constants/colors';

export const StatusText = styled.div`
  display: inline-block;

  color: ${(props) =>
    props.status === 'signed' && colors.primary) ||
    colors.orange};

  font-size: 12px;
`;
