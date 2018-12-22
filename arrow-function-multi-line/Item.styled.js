import styled from 'styled-components';

export const StatusText = styled.div`
  display: inline-block;

  color: ${(props) =>
  	(props.status === 'signed' && 'red') ||
  	'blue'};

  font-size: 12px;
`;
