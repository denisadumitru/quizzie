import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledQuestionText = styled(Typography)(
  ({ theme }) => `
    padding: ${theme.spacing(8)} ${theme.spacing(2)};
    background: ${theme.palette.secondary.dark};
    color: white;
    font-weight: bold;
    word-break: break-word;
    margin-bottom: ${theme.spacing(3)};
`
);
