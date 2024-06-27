import { useContext } from 'react';
import styled from 'styled-components';
import { HangmanContext } from '../../context/HangmanContext';
import { main } from '../../constants/colors';

function AnswerDisplay() {
  const { correctAlphabets, answer } = useContext(HangmanContext);

  return (
    <AnswerDisplayContainer>
      {answer.split('').map((alphabet, id) => (
        <AnswerAlphabet key={id}>
          {correctAlphabets.includes(alphabet) && alphabet}
          <UnderLine />
        </AnswerAlphabet>
      ))}
    </AnswerDisplayContainer>
  );
}

const AnswerDisplayContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6px;
  cursor: default
`;

const AnswerAlphabet = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: white;
  box-shadow: 0px 4px 12.9px 0px rgba(255, 136, 68, 0.26);
  position: relative;
  font-family: 'Jalnan';
  font-size: 18px;
  line-height: 19px;
  color: ${main};
`;

const UnderLine = styled.div`
  position: absolute;
  bottom: 12px;
  width: 20px;
  height: 3px;
  background-color: ${main};
  border-radius: 100px;
`;

export default AnswerDisplay;
