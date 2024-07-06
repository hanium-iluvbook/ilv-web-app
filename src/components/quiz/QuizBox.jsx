import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';
import styled from 'styled-components';
import { blue, gray } from '../../constants/colors';
import QuizItem from './QuizItem';

function QuizBox({ quiz }) {
  const { progress, setProgress } = useContext(QuizContext);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [resultInfo, setResultInfo] = useState([]);

  const handleClickNextQuizBtn = () => {
    console.log(progress, quiz[progress].answer, userAnswer);
    const newResultInfo = JSON.parse(JSON.stringify(resultInfo));
    newResultInfo.push({
      quiz_num: quiz[progress].quiz_num,
      user_answer: userAnswer,
      correct: userAnswer === quiz[progress].answer,
    });
    setResultInfo(newResultInfo);
    console.log(newResultInfo);

    if (progress < 9) {
      setIsActive(false);
      setUserAnswer(null);
      setProgress((prev) => prev + 1);
    } else {
      // resultInfo 전달과 함께 결과 확인창으로 넘어가기
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
    <QuizBoxContainer>
      <Title>
        <TitleLogo>Title</TitleLogo>
        <TitleText>Hansel and Gretel Hansel and Gretel</TitleText>
      </Title>
      <QuizItem
        quiz_num={quiz[progress].quiz_num}
        question={quiz[progress].question}
        type={quiz[progress].type} // 부문(Reading Comprehension Quiz, Voca Quiz, Listening Quiz, Creavity Quiz)
        format={quiz[progress].format} // 문제 유형(True/False, Multiple Choice, Short Answer)
        options={quiz[progress].options}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
      />
      {isActive && (
        <NextQuizBtn onClick={handleClickNextQuizBtn}>
          {progress < 9 ? '다음 문제' : '결과 확인하기'}
        </NextQuizBtn>
      )}
    </QuizBoxContainer>
  );
}

const QuizBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  display: flex;
  padding: 24px 0px 8px 0px;
  width: 100%;
  gap: 8px;
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
`;

export default QuizBox;
