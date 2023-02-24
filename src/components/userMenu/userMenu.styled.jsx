import styled from 'styled-components';

export const ExitBtn = styled.button`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.black};
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: transform 250ms linear, border-color 250ms linear,
    color 250ms linear;
  :focus,
  :hover,
  :focus-visible {
    transform: scale(1.1);
  }
`;
