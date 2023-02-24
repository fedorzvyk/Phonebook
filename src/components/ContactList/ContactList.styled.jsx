import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
`;
