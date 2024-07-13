import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styled from 'styled-components';
import { blue, gray } from '../../constants/colors';
import QuizItem from './QuizItem';
import { useNavigate } from 'react-router-dom';

function QuizBox() {
  const { progress, setProgress, level, quizzes, resultInfo, setResultInfo } =
    useContext(QuizContext);

  const navigate = useNavigate();

  const [userAnswer, setUserAnswer] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleClickNextQuizBtn = (e) => {
    e.preventDefault();
    if (!userAnswer) return;

    if (quizzes[progress].quiz_type !== 'Creativity Quiz') {
      const newResultInfo = JSON.parse(JSON.stringify(resultInfo));
      newResultInfo.push({
        quiz_num: quizzes[progress].quiz_num,
        user_answer: userAnswer,
        correct: userAnswer === quizzes[progress].answer,
      });
      setResultInfo(newResultInfo);
    }

    if (progress < 9) {
      setIsActive(false);
      setUserAnswer(null);
      setProgress((prev) => prev + 1);
    } else {
      navigate('/quizResult', {
        state: {
          quizzes,
          resultInfo,
          level,
        },
      });
    }
  };

  useEffect(() => {
    if (userAnswer) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [userAnswer, setIsActive]);

  return (
    <QuizBoxContainer onSubmit={(e) => handleClickNextQuizBtn(e)}>
      <Title>
        <TitleLogo>Title</TitleLogo>
        <TitleText>Hansel and Gretel Hansel and Gretel</TitleText>
      </Title>
      <QuizItem
        quiz_num={quizzes[progress].quiz_num}
        question={quizzes[progress].question}
        quiz_type={quizzes[progress].quiz_type}
        format={quizzes[progress].format}
        voca={quizzes[progress].pronunciation_or_voca}
        options={quizzes[progress].options}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        level={level}
      />
      {isActive && (
        <NextQuizBtn>
          {progress < 9 ? '다음 문제' : '결과 확인하기'}
        </NextQuizBtn>
      )}
    </QuizBoxContainer>
  );
}

const QuizBoxContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  padding: 24px 0px 8px 0px;
  width: 100%;
  gap: 8px;
  padding-bottom: 16px;
`;

const TitleLogo = styled.div`
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  background: ${gray};
  color: white;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

const TitleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const NextQuizBtn = styled.button`
  display: flex;
  width: 100%;
  height: 58px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${blue};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: white;
  border: none;
  align-self: flex-end;
  margin-bottom: 16px;
`;

export default QuizBox;
