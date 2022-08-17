import API from './QuizAPI';

export const getQuiz = () => API.get().then((response) => response.data);
