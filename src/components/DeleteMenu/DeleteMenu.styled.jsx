import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[5]}px;
  padding: 20px;
  border: 1px solid;
  border-radius: 8px;
`;

export const Title = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const BtnWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
`;
