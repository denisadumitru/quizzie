import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/system';

export const StyledButtonBase = styled(MuiButton)`
  border-radius: 0;
`;

export const StyledFilledButton = styled(StyledButtonBase)(
  ({ theme }) => `
  background: linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main});
  color: white;
`
);

export const StyledOutlinedButton = styled(StyledButtonBase)(
  ({ theme }) => `
  border-color: linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main});
`
);
