import { Typography } from '@mui/material';
import { useContext, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import routes from '../config/routes';
import useQuiz from '../shared/hooks/useQuiz';
import { AnswersList } from '../modules/results/components';
import { Button } from '../shared/components';
import { QuizContext } from '../shared/context/QuizContext';
import Layout from '../shared/layout/Layout';

export default function Results() {
  const navigate = useNavigate();
  const {
    state: { answers },
    actions,
  } = useContext(QuizContext);

  const { remove: removeQuizData, questions } = useQuiz(false);

  const { correctAnswers, questionsWithResults } = useMemo(() => {
    if (!questions) return {};

    const questionsWithResults = questions.map((question, index) => ({
      text: question.question,
      correctAnswer: question.correct_answer,
      selectedAnswer: answers[index],
      isCorrect: question.correct_answer === answers[index] ? true : false,
    }));
    const correctAnswers = questionsWithResults.filter(
      (result) => result.isCorrect
    ).length;

    return {
      questionsWithResults,
      correctAnswers,
    };
  }, [questions, answers]);

  const handlePlayAgainClick = () => {
    actions.resetQuiz();
    navigate(routes.Quiz);
    removeQuizData();
  };

  if (!questions) return <Navigate replace to={routes.Intro} />;

  return (
    <Layout
      header={
        <Typography variant='h4' component='h1'>
          <div>You scored</div>
          <div>
            {correctAnswers} / {questions.length}
          </div>
        </Typography>
      }
      content={<AnswersList questions={questionsWithResults} />}
      actionBar={
        <Button
          variant='filled'
          fullWidth
          onClick={() => handlePlayAgainClick()}
          sx={{ height: '80px' }}
        >
          Play again?
        </Button>
      }
    />
  );
}
