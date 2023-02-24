import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  gap: ${p => p.theme.space[5]}px;
`;

export const PswrdInput = styled.div`
  position: relative;
  /* width: 100%; */
`;

export const EyeBtn = styled.button`
  display: flex;
  justify-content: space-around;
  background-color: ${p => p.theme.colors.white};

  cursor: pointer;

  border-radius: 8px;
  border: 0;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-115%, -50%);
`;
