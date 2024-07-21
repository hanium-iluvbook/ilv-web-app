import styled from 'styled-components';
import { blue, gray } from '../../constants/colors';
import { ReactComponent as True } from '../../assets/true.svg';
import { ReactComponent as False } from '../../assets/false.svg';

function TrueFalse({ userAnswer, handleClickAnswer, isAnswer, answer }) {
  return (
    <SelectContainer>
      <Select
        $selected={!isAnswer && userAnswer === 'True'}
        $answer={answer === 'True'}
        onClick={() => handleClickAnswer('True')}
      >
        <True
          stroke={
            (!isAnswer && userAnswer === 'True') || answer === 'True'
              ? blue
              : gray
          }
        />
        {isAnswer && userAnswer === 'True' && <MyPick $correct={answer === userAnswer}>My Pick</MyPick>}
      </Select>
      <Select
        $selected={!isAnswer && userAnswer === 'False'}
        $answer={answer === 'False'}
        onClick={() => handleClickAnswer('False')}
      >
        <False stroke={(!isAnswer && userAnswer === 'False') || answer === 'False' ? blue : gray} />
        {isAnswer && userAnswer === 'False' && <MyPick $correct={answer === userAnswer}>My Pick</MyPick>}
      </Select>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  gap: 16px;
`;

const Select = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.$selected || props.$answer ? '#E4F0FF' : 'white'};
  border: ${(props) => props.$selected && `1px dashed ${blue}`};
  border: ${(props) => props.$answer && `1px solid ${blue}`};
  border-radius: 16px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MyPick = styled.div`
  position: absolute;
  bottom: 10px;
  font-family: 'Jalnan';
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.$correct ? blue : gray };
`;

export default TrueFalse;
