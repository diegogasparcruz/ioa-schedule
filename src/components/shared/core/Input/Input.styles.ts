import styled, { css } from 'styled-components';

interface InputWrapProps {
  isFocused: boolean;
}

export const InputWrap = styled.div.attrs((props: InputWrapProps) => ({
  className: 'input',
  ...props,
}))`
  width: 420px;
  height: 48px;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 6px;
  padding: 0 20px;

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      box-shadow: inset 0px 0px 0px 0.5px ${theme.colors['blue-light']};
    `}

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;

  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 5px;
  }
`;
