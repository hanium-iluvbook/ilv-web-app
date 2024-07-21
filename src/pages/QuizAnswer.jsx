import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { backgroundGray, lightBlack } from '../constants/colors';
import QuizItem from '../components/quiz/QuizItem';
import styled from 'styled-components';
import BottomNavigation from '../components/quizAnswer/BottomNavigation';

function QuizAnswer() {
  const location = useLocation();
  const { quizzes, resultInfo, level } = location.state;

  return (
    <Layout backgroundColor={backgroundGray} color={lightBlack} title="퀴즈">
      <QuizBox>
        {quizzes &&
          quizzes.map(
            (quiz, id) =>
              quiz.quiz_type !== 'Creativity Quiz' && (
                <QuizItem
                  key={id}
                  quiz_num={id + 1}
                  question={quiz.question}
                  quiz_type={quiz.quiz_type}
                  format={quiz.format}
                  voca={quiz.pronunciation_or_voca}
                  options={quiz.options}
                  level={level}
                  isAnswer={true}
                  answer={quiz.answer}
                  userAnswer={resultInfo[id].user_answer}
                />
              )
          )}
      </QuizBox>
      <BottomNavigation />
    </Layout>
  );
}

const QuizBox = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;

export default QuizAnswer;
