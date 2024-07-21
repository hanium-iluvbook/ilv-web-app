import { useState } from 'react';
import Layout from '../components/Layout';
import ProgressBar from '../components/quiz/ProgressBar';
import { backgroundGray, lightBlack } from '../constants/colors';
import { QuizContext } from '../context/QuizContext';
import QuizBox from '../components/quiz/QuizBox';
import { useLocation } from 'react-router-dom';

function Quiz() {
  const location = useLocation();
  const { quizzes, level, title } = location.state;

  const [progress, setProgress] = useState(0);
  const [resultInfo, setResultInfo] = useState([]);

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        level,
        progress,
        setProgress,
        resultInfo,
        setResultInfo,
      }}
    >
      <Layout backgroundColor={backgroundGray} color={lightBlack} title="퀴즈">
        <ProgressBar />
        {quizzes && <QuizBox title={title} />}
      </Layout>
    </QuizContext.Provider>
  );
}

export default Quiz;
