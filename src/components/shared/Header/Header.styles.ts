import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    ${({ theme }) =>
      css`
        background: ${theme.colors['blue-light']};
        color: ${theme.colors.shape};
        font-size: ${theme.typography.sizes.base};
      `};

    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
