import styled from '@emotion/styled';

export const StyledList = styled('ul')(({ theme }) => ({
  textAlign: 'left',
  listStyleType: 'none',
  padding: `0 ${theme.spacing(3)}`,
  wordBreak: 'break-word',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));
