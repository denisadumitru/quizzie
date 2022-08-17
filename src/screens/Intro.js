import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from '../config/routes';
import { Button } from '../shared/components';
import Layout from '../shared/layout/Layout';

export default function Intro() {
  const navigate = useNavigate();

  const handleBeginClick = () => {
    navigate(routes.Quiz);
  };

  return (
    <Layout
      header={
        <Typography variant='h4' component='h1'>
          Welcome to the Quizzie Challenge!
        </Typography>
      }
      content={
        <Stack justifyContent={'center'} flex={1} px={{ xs: 2, md: 7 }}>
          <Typography variant='subtitle1'>
            <p>You will be presented with 10 True or False questions.</p>
            <p>Can you score 100%?</p>
          </Typography>
        </Stack>
      }
      actionBar={
        <Button variant='filled' fullWidth onClick={handleBeginClick}>
          Begin
        </Button>
      }
    />
  );
}
