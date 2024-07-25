import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  backgroundGray,
  blue,
  lightBlack,
  main,
  pink,
} from '../constants/colors';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import quizResultBackgroundLow from '../assets/quizResultBackgroundLow.png';
import quizResultBackgroundMid from '../assets/quizResultBackgroundMid.png';
import quizResultBackgroundUp from '../assets/quizResultBackgroundUp.png';
import QuizResultInfo from '../components/quizResult/QuizResultInfo';
import { ReactComponent as RabbitGreat } from '../assets/rabbitGreat.svg';
import { ReactComponent as RabbitGood } from '../assets/rabbitGood.svg';
import { ReactComponent as RabbitCheerUp } from '../assets/rabbitCheerUp.svg';
import Button from '../components/common/Button';

function QuizResult() {
  const location = useLocation();
  const { quizzes, resultInfo, level } = location.state;

  const navigate = useNavigate();

  const [totalCount, setTotalCount] = useState();
  const [correctCount, setCorrectCount] = useState();
  const [grade, setGrade] = useState();

  useEffect(() => {
    setTotalCount(resultInfo.length);
    setCorrectCount(resultInfo.filter((v) => v.correct).length);
  }, []);

  useEffect(() => {
    const maxLow = totalCount * (1 / 3);
    const maxMid = totalCount * (2 / 3);

    setGrade(
      correctCount > maxMid ? 'up' : correctCount > maxLow ? 'mid' : 'low'
    );
  }, [totalCount, correctCount]);

  const handleClickCheckQuiz = () => {
    navigate('/quizAnswer', {
      state: {
        quizzes,
        resultInfo,
        level,
      },
    });
  };

  return (
    <Layout backgroundColor={backgroundGray} color={lightBlack}>
      <Background
        src={
          grade === 'up'
            ? quizResultBackgroundUp
            : grade === 'mid'
            ? quizResultBackgroundMid
            : quizResultBackgroundLow
        }
      />
      <QuizResultContainer>
        <QuizResultInfo
          totalCount={totalCount}
          correctCount={correctCount}
          grade={grade}
        />
        <ButtonContainer>
          {grade === 'up' ? (
            <RabbitGreat style={{ marginRight: '80px' }} />
          ) : grade === 'mid' ? (
            <RabbitGood style={{ marginRight: '80px' }} />
          ) : (
            <RabbitCheerUp style={{ marginRight: '80px' }} />
          )}
          <Button
            backgroundColor={
              grade === 'up' ? blue : grade === 'mid' ? main : pink
            }
            onClick={handleClickCheckQuiz}
          >
            퀴즈 확인하기
          </Button>
        </ButtonContainer>
      </QuizResultContainer>
    </Layout>
  );
}

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: -80px;
  position: absolute;
`;

const QuizResultContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

export default QuizResult;
