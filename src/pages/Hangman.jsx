import styled from 'styled-components';
import AlphabetBox from '../components/hangman/AlphabetBox';
import { whiteGray } from '../constants/colors';
import { useState } from 'react';
import { HangmanContext } from '../context/HangmanContext';
import AnswerDisplay from '../components/hangman/AnswerDisplay';
import HangmanInfo from '../components/hangman/HangmanInfo';
import HangmanCanvas from '../components/hangman/HangmanCanvas';

function Hangman() {
  const [answer, setAnswer] = useState('CORN');
  const [hint, setHint] = useState('Vegetables');

  const [failCount, setFailCount] = useState(0);
  const [correctAlphabets, setCorrectAlphabets] = useState([]);
  const [isFinish, setIsFinish] = useState(false);

  return (
    <HangmanContext.Provider
      value={{
        failCount,
        setFailCount,
        correctAlphabets,
        setCorrectAlphabets,
        answer,
        isFinish,
        setIsFinish,
      }}
    >
      <HangmanContainer>
        <HangmanInfo hint={hint} />
        <AnswerDisplay />
        <HangmanCanvas />
        <AlphabetBox />
      </HangmanContainer>
    </HangmanContext.Provider>
  );
}

const HangmanContainer = styled.div`
  width: 600px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${whiteGray};
  padding: 40px 16px;
`;

export default Hangman;
