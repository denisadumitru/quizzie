import { Skeleton, Typography } from '@mui/material';
import { Layout } from '../../../shared/layout';

export default function QuizSkeleton() {
  return (
    <Layout
      header={<Skeleton width='200px' height='50px' />}
      content={<Typography variant='h4'>Loading...</Typography>}
      actionBar={<Skeleton width='100%' height='100px' />}
    />
  );
}
