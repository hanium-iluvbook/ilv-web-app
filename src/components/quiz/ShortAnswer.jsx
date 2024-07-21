import styled, { css } from 'styled-components';
import { blue, lightGray, red } from '../../constants/colors';

function ShortAnswer({ userAnswer, handleClickAnswer, isAnswer, answer }) {
  return isAnswer ? (
    <ShortAnswerContainer>
      <ShortAnswerUserAnswer>
        <UserAnswer $correct={answer === userAnswer}>{userAnswer}</UserAnswer>
        <IsCorrect $correct={answer === userAnswer}>
          {answer === userAnswer ? '정답' : '오답'}
        </IsCorrect>
      </ShortAnswerUserAnswer>
      {answer !== userAnswer && (
        <ShortAnswerAnswer>정답은 "{answer}" 입니다.</ShortAnswerAnswer>
      )}
    </ShortAnswerContainer>
  ) : (
    <ShortAnswerInput
      placeholder="답을 적어주세요!"
      value={userAnswer ?? ''}
      onChange={(e) => handleClickAnswer(e.target.value)}
    />
  );
}

const ShortAnswerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ShortAnswerBox = css`
  padding: 16px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  border: none;
  ::placeholder {
    color: ${lightGray};
  }
`;
const ShortAnswerInput = styled.input`
  ${ShortAnswerBox}
`;

const ShortAnswerUserAnswer = styled.div`
  ${ShortAnswerBox}
  display: flex;
  justify-content: space-between;
`;

const UserAnswer = styled.div`
    text-decoration: ${(props) => (!props.$correct && 'line-through')};
`

const IsCorrect = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${(props) => (props.$correct ? blue : red)};
`;

const ShortAnswerAnswer = styled.div`
  ${ShortAnswerBox}
  color: ${blue};
`;

export default ShortAnswer;
