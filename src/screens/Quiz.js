import { ButtonGroup, Typography } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import routes from '../config/routes';
import { Question, QuizSkeleton } from '../modules/quiz/components';
import useQuiz from '../shared/hooks/useQuiz';
import { Button } from '../shared/components';
import { QuizContext } from '../shared/context/QuizContext';
import Layout from '../shared/layout/Layout';

export const OPTIONS = {
  TRUE: 'True',
  FALSE: 'False',
};

export default function Quiz() {
  const navigate = useNavigate();
  const {
    state: { questionIndex },
    actions,
  } = useContext(QuizContext);

  const { loading, error, questions } = useQuiz();

  const handleAnswerClick = (answer) => {
    actions.answerQuestion(answer);

    if (questionIndex === questions.length - 1) {
      navigate(routes.Results);
    }
  };

  if (error) return 'Something went wrong.';
  if (loading || !questions) return <QuizSkeleton />;

  const currentQuestion = questions[questionIndex] || {};

  return (
    <Layout
      header={
        <Typography variant='h4' component='h1'>
          {currentQuestion.category}
        </Typography>
      }
      content={
        <Question
          text={currentQuestion.question}
          questionIndex={questionIndex}
          numQuestions={questions.length}
        />
      }
      actionBar={
        <ButtonGroup fullWidth>
          <Button
            variant='outlined'
            onClick={() => handleAnswerClick(OPTIONS.FALSE)}
          >
            False
          </Button>
          <Button
            variant='filled'
            onClick={() => handleAnswerClick(OPTIONS.TRUE)}
          >
            True
          </Button>
        </ButtonGroup>
      }
    />
  );
}
