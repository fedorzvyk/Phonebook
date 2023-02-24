import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[5]}px;
  padding: 20px;
  border: 1px solid;
      border-radius:8px;
`;
