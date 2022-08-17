import he from 'he';

export const transformQuestionsText = (questions) =>
  questions.map((question) => ({
    ...question,
    question: he.decode(question.question),
  }));
