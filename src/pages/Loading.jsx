import AlphabetBox from '../components/hangman/AlphabetBox';
import { darkGray, whiteGray } from '../constants/colors';
import { useState } from 'react';
import { HangmanContext } from '../context/HangmanContext';
import AnswerDisplay from '../components/hangman/AnswerDisplay';
import HangmanInfo from '../components/hangman/HangmanInfo';
import HangmanCanvas from '../components/hangman/HangmanCanvas';
import Layout from '../components/Layout';
import FairytaleCard from '../components/loading/FairytaleCard';
import LoadingText from '../components/loading/LadingText';
import Button from '../components/loading/Button';
import styled from 'styled-components';
import LoadingFinish from '../components/loading/LoadingFinish';

function Loading() {
  const [answer, setAnswer] = useState('CORN');
  const [hint, setHint] = useState('Vegetables');

  const [failCount, setFailCount] = useState(0);
  const [correctAlphabets, setCorrectAlphabets] = useState([]);
  const [isFinish, setIsFinish] = useState(false);
  const [fairytale, setFairytale] = useState(false);

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
      <Layout
        backgroundColor={!isFinish ? whiteGray : 'white'}
        color={darkGray}
      >
        {!isFinish ? (
          <LoadingContainer>
            <HangmanInfo hint={hint} />
            <AnswerDisplay />
            <HangmanCanvas />
            <AlphabetBox />
          </LoadingContainer>
        ) : !fairytale ? (
          <LoadingContainer>
            <FairytaleCard />
            <LoadingText />
            <Button text="취소하기" />
          </LoadingContainer>
        ) : (
          <LoadingContainer>
            <LoadingFinish />
            <Button text="동화책 보러가기" />
          </LoadingContainer>
        )}
      </Layout>
    </HangmanContext.Provider>
  );
}

const LoadingContainer = styled.div`
  width: 100%;
  min-height: calc(100vh -80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 80px;
  justify-content: space-between;
`;

export default Loading;
