import { Typography } from '@mui/material';

import { StyledQuestionText } from './Question.styled';

export default function Question(props) {
  const { numQuestions, questionIndex, text } = props;

  return (
    <>
      <StyledQuestionText>{text}</StyledQuestionText>
      <Typography variant='body1'>
        {questionIndex + 1} of {numQuestions}
      </Typography>
    </>
  );
}
