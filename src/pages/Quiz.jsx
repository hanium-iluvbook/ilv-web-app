import { useState } from 'react';
import Layout from '../components/Layout';
import ProgressBar from '../components/quiz/ProgressBar';
import { whiteGray, lightBlack } from '../constants/colors';
import { QuizContext } from '../context/QuizContext';
import QuizBox from '../components/quiz/QuizBox';
import { useLocation } from 'react-router-dom';

function Quiz() {
  const location = useLocation();

  const [progress, setProgress] = useState(0);
  const [quiz, setQuiz] = useState(location.state?.quizzes);

  return (
    <QuizContext.Provider value={{ progress, setProgress }}>
      <Layout backgroundColor={whiteGray} color={lightBlack} title="퀴즈">
        <ProgressBar />
        {quiz && <QuizBox quiz={quiz} />}
      </Layout>
    </QuizContext.Provider>
  );
}

export default Quiz;
