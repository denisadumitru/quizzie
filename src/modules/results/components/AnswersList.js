import { Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { StyledList } from './AnswersList.styled';

export default function AnswersList(props) {
  const { questions } = props;

  return (
    <StyledList>
      {questions.map((question) => (
        <li key={question.text}>
          <Stack spacing={{ xs: 1, md: 2 }} direction={'row'}>
            {question.isCorrect ? (
              <CheckCircleIcon color='success' data-testid='success-icon' />
            ) : (
              <CancelIcon color='error' data-testid='error-icon' />
            )}
            <Stack spacing={1}>
              <Typography>
                <div>{question.text}</div>
                <div>
                  Correct answer: <strong>{question.correctAnswer}</strong>
                </div>
              </Typography>
            </Stack>
          </Stack>
        </li>
      ))}
    </StyledList>
  );
}
