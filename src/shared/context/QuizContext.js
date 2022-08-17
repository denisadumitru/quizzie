import { createSlice } from '@reduxjs/toolkit';
import { createContext, useReducer } from 'react';

const initialState = {
  questionIndex: 0,
  answers: [],
};

export const QuizContext = createContext(initialState);

const slice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    advanceQuestion(state, action) {
      state.questionIndex = state.questionIndex + 1;
      state.answers = [...state.answers, action.payload.answer];
    },
    resetQuiz() {
      return initialState;
    },
  },
});

export const QuizContextProvider = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(slice.reducer, initialState);

  const answerQuestion = (answer) => {
    dispatch({
      type: slice.actions.advanceQuestion,
      payload: {
        answer,
      },
    });
  };

  const resetQuiz = () => {
    dispatch({
      type: slice.actions.resetQuiz,
    });
  };

  const actions = {
    answerQuestion,
    resetQuiz,
  };

  return (
    <QuizContext.Provider value={{ state, actions }}>
      {children}
    </QuizContext.Provider>
  );
};
