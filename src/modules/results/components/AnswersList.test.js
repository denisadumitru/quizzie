import { ThemeProvider } from '@mui/material';
import { cleanup, render, screen } from '@testing-library/react';
import { AnswersList } from '.';
import { theme } from '../../../styles/theme';

describe('Answers list', () => {
  afterEach(cleanup);

  const renderAnswerList = (questions) => {
    render(
      <ThemeProvider theme={theme}>
        <AnswersList questions={questions} />
      </ThemeProvider>
    );
  };

  it('should display success icon', () => {
    const questions = [
      {
        text: 'Sample question',
        isCorrect: true,
        correctAnswer: true,
      },
    ];
    renderAnswerList(questions);

    const icon = screen.getByTestId('success-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should display error icon', () => {
    const questions = [
      {
        text: 'Sample question',
        isCorrect: false,
        correctAnswer: true,
      },
    ];
    renderAnswerList(questions);

    const icon = screen.getByTestId('error-icon');
    expect(icon).toBeInTheDocument();
  });
});
