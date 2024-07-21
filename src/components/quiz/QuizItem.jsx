import styled from 'styled-components';
import { lightBlack, lightGray } from '../../constants/colors';
import VocaQuizCard from './VocaQuizCard';
import MultipleChoice from './MultipleChoice';
import TrueFalse from './TrueFalse';
import Problem from './Problem';
import ShortAnswer from './ShortAnswer';

function QuizItem({
  quiz_num,
  question,
  quiz_type,
  format,
  voca,
  options,
  userAnswer,
  setUserAnswer,
  level,
  isAnswer,
  answer,
}) {
  const handleClickAnswer = (v) => {
    if (isAnswer) return;
    setUserAnswer(v);
  };

  return (
    <QuizItemContainer>
      <Problem
        quiz_type={quiz_type}
        quiz_num={quiz_num}
        question={question}
        voca={voca}
      />
      {/** 단어 퀴즈인 경우 단어 카드 */}
      {quiz_type === 'Voca Quiz' && <VocaQuizCard voca={voca} />}
      {/** 객관식인 경우 */}
      {format === 'Multiple Choice' && (
        <MultipleChoice
          level={level}
          quiz_type={quiz_type}
          options={options}
          userAnswer={userAnswer}
          handleClickAnswer={handleClickAnswer}
          isAnswer={isAnswer}
          answer={answer}
        />
      )}
      {/** OX인 경우 */}
      {format === 'True/False' && (
        <TrueFalse
          userAnswer={userAnswer}
          handleClickAnswer={handleClickAnswer}
          isAnswer={isAnswer}
          answer={answer}
        />
      )}
      {/** 주관식인 경우 */}
      {format === 'Short Answer' && (
        <ShortAnswer
          userAnswer={userAnswer}
          handleClickAnswer={handleClickAnswer}
          isAnswer={isAnswer}
          answer={answer}
        />
      )}
    </QuizItemContainer>
  );
}

const QuizItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
`;

export default QuizItem;
