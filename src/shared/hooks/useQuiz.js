import { useQuery } from '@tanstack/react-query';
import { getQuiz } from '../../modules/quiz/services/QuizService';
import { transformQuestionsText } from '../utils.js/transformQuestionsText';

const QUERY_KEY = 'quiz';

export default function useQuiz(fetchingEnabled = true) {
  const { data, loading, error, remove } = useQuery([QUERY_KEY], getQuiz, {
    refetchOnWindowFocus: false,
    enabled: fetchingEnabled,
  });
  const questions = data?.results ? transformQuestionsText(data.results) : null;

  return {
    questions,
    loading,
    error,
    remove,
  };
}
