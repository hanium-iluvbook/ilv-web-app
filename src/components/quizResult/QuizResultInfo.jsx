import styled from 'styled-components';
import { blue, darkGray, lightGray, main, pink } from '../../constants/colors';
import { ReactComponent as Refrash } from '../../assets/refrash.svg';
import { useNavigate } from 'react-router-dom';

function QuizResultInfo({ totalCount, correctCount, grade }) {
  const navigate = useNavigate();

  const handleClickRetryBtn = () => {
    navigate(-1);
  };

  const text =
    grade === 'up'
      ? `동화책을 완벽 복습했어요\n다른 동화도 만들어서 다양한\n퀴즈를 풀어볼까요?`
      : grade === 'mid'
      ? '동화책을 복습했어요 다시 풀어보거나\n다른 동화도 만들어서 다양한\n퀴즈를 풀어볼까요?'
      : `어려운 문제가 있었나보네요\n부모님이나 지도자에게 문제풀이를\n도움받아보세요!`;


  return (
    <QuizResultInfoContainer>
      <CorrectRate
        color={grade === 'up' ? blue : grade === 'mid' ? main : pink}
      >
        {correctCount}/{totalCount}
      </CorrectRate>
      <ResultTextInfo>
        <ResultText>
          <CorrectCountText>
            {correctCount}개 퀴즈를 맞추었어요!
          </CorrectCountText>
          <Instruction>
            {text.split('\n').map((line, index) => (
              <Text key={index}>
                {line}
                <br />
              </Text>
            ))}
          </Instruction>
        </ResultText>
        <RetryBtn onClick={handleClickRetryBtn}>
          <Refrash style={{cursor: 'pointer'}}/>
          다시풀기
        </RetryBtn>
      </ResultTextInfo>
    </QuizResultInfoContainer>
  );
}

const QuizResultInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  z-index: 1;
`;

const CorrectRate = styled.div`
  text-align: center;
  font-family: 'Jalnan';
  font-size: 80px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

const ResultTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const ResultText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const CorrectCountText = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const Instruction = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
`;

const Text = styled.div`
  color: ${darkGray};
`;

const RetryBtn = styled.div`
  width: 100px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background-color: ${lightGray};
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  cursor: pointer;
`;

export default QuizResultInfo;
