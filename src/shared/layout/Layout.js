import { Box } from '@mui/material';
import {
  StyledActionBar,
  StyledCard,
  StyledContainer,
  StyledMain,
} from './Layout.styled';

export default function Layout(props) {
  const { header, content, actionBar } = props;

  return (
    <StyledMain>
      <StyledContainer maxWidth='md'>
        <StyledCard>
          {header && (
            <Box component='header' px={{ xs: 2, md: 7 }} py={{ xs: 3, md: 5 }}>
              {header}
            </Box>
          )}
          {content && (
            <Box width={'100%'} overflow={'scroll'}>
              {content}
            </Box>
          )}
          {actionBar && <StyledActionBar>{actionBar}</StyledActionBar>}
        </StyledCard>
      </StyledContainer>
    </StyledMain>
  );
}
