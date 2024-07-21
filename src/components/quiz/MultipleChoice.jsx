import styled from 'styled-components';
import { blue, gray, lightGray } from '../../constants/colors';

function MultipleChoice({
  level,
  quiz_type,
  options,
  userAnswer,
  handleClickAnswer,
  isAnswer,
  answer,
}) {
  return level === 'low' && quiz_type === 'Voca Quiz' ? ( // low 레벨의 단어 퀴즈의 경우 이모지 퀴즈
    <LowOptionContainer>
      {options.map((v, id) => (
        <LowOption
          key={id}
          $selected={!isAnswer && userAnswer === String.fromCharCode(id + 65)}
          $answer={answer === String.fromCharCode(id + 65)}
          onClick={() => handleClickAnswer(String.fromCharCode(id + 65))}
        >
          <LowOptionNum
            $selected={!isAnswer && userAnswer === String.fromCharCode(id + 65)}
            $answer={answer === String.fromCharCode(id + 65)}
          >
            {String.fromCharCode(id + 65)}
          </LowOptionNum>
          <LowOptionText>{v}</LowOptionText>
          {isAnswer && userAnswer === String.fromCharCode(id + 65) && (
            <MyPick $correct={userAnswer === answer}>My Pick</MyPick>
          )}
        </LowOption>
      ))}
    </LowOptionContainer>
  ) : (
    <OptionContainer>
      {options.map((v, id) => (
        <Option
          key={id}
          $selected={!isAnswer && userAnswer === String.fromCharCode(id + 65)}
          $answer={answer === String.fromCharCode(id + 65)}
          onClick={() => handleClickAnswer(String.fromCharCode(id + 65))}
        >
          <OptionNum
            $selected={!isAnswer && userAnswer === String.fromCharCode(id + 65)}
            $answer={answer === String.fromCharCode(id + 65)}
          >
            {String.fromCharCode(id + 65)}
          </OptionNum>
          <OptionText>{v}</OptionText>
          {isAnswer && userAnswer === String.fromCharCode(id + 65) && (
            <MyPick $correct={answer === userAnswer} $right={true}>
              My Pick
            </MyPick>
          )}
        </Option>
      ))}
    </OptionContainer>
  );
}

const LowOptionContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const LowOption = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  background-color: ${(props) =>
    props.$selected || props.$answer ? '#E4F0FF' : 'white'};
  border: ${(props) => props.$selected && `1px dashed ${blue}`};
  border: ${(props) => props.$answer && `1px solid ${blue}`};
  position: relative;
`;

const LowOptionNum = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  background-color: ${(props) =>
    props.$selected || props.$answer ? blue : lightGray};
  color: ${(props) => (props.$selected || props.$answer) && 'white'};
  font-size: 12px;
`;

const LowOptionText = styled.div`
  font-size: 50px;
`;

const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Option = styled.div`
  display: flex;
  height: 58px;
  padding: 16px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 16px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  background-color: ${(props) =>
    props.$selected || props.$answer ? '#E4F0FF' : 'white'};
  border: ${(props) => props.$selected && `1px dashed ${blue}`};
  border: ${(props) => props.$answer && `1px solid ${blue}`};
  position: relative;
`;

const OptionNum = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  background-color: ${(props) =>
    props.$selected || props.$answer ? blue : lightGray};
  color: ${(props) => (props.$selected || props.$answer) && 'white'};
`;

const OptionText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;

const MyPick = styled.div`
  position: absolute;
  right: ${(props) => props.$right && '10px'};
  bottom: ${(props) => (props.$right ? '50%' : '5px')};
  transform: translateY(${(props) => props.$right && '+50%'});
  font-family: 'Jalnan';
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => (props.$correct ? blue : gray)};
`;

export default MultipleChoice;
