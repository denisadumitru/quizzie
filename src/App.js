import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './config/routes';
import { Intro, Quiz, Results } from './screens';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to={routes.Intro} />} />
      <Route path={routes.Intro} element={<Intro />} />
      <Route path={routes.Quiz} element={<Quiz />} />
      <Route path={routes.Results} element={<Results />} />
    </Routes>
  );
}

export default App;
