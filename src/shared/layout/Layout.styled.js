import { Container, Paper } from '@mui/material';
import { styled } from '@mui/system';

export const StyledMain = styled('main')(
  ({ theme }) => `
  height: 100%;
  background-image: linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.secondary.light});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
);

export const StyledContainer = styled(Container)(
  ({ theme }) => `
  margin: 0;
  padding: ${theme.spacing(3)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
);

export const StyledCard = styled(Paper)(
  ({ theme }) => `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    height: 95%;

    ${theme.breakpoints.up('md')} {
        height: 80%;
    }
`
);

export const StyledActionBar = styled('div')(
  ({ theme }) => `
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${theme.spacing(3)};
`
);
