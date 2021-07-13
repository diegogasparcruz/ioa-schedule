import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${({ theme }) => theme.colors['text-title']};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${({ theme }) => theme.colors.shape};
      color: ${({ theme }) => theme.colors['text-body']};
      border-radius: 0.25rem;

      &.table__actions {
        display: flex;
        justify-content: space-between;

        .table__actions--edit {
          svg {
            fill: ${({ theme }) => theme.colors.green};
            transition: filter 0.2s;

            &:hover {
              filter: brightness(0.7);
            }
          }
        }

        .table__actions--delete {
          svg {
            fill: ${({ theme }) => theme.colors.red};
            transition: filter 0.2s;

            &:hover {
              filter: brightness(0.7);
            }
          }
        }
      }
    }

    span {
      text-align: center;
    }
  }
`;
