import AlphabetBox from '../components/hangman/AlphabetBox';
import {
  backgroundGray,
  darkGray,
  darkMain,
  lightGray,
} from '../constants/colors';
import { useEffect, useState } from 'react';
import { HangmanContext } from '../context/HangmanContext';
import AnswerDisplay from '../components/hangman/AnswerDisplay';
import HangmanInfo from '../components/hangman/HangmanInfo';
import HangmanCanvas from '../components/hangman/HangmanCanvas';
import Layout from '../components/Layout';
import FairytaleCard from '../components/loading/FairytaleCard';
import LoadingText from '../components/loading/LadingText';
import Button from '../components/common/Button';
import styled from 'styled-components';
import LoadingFinish from '../components/loading/LoadingFinish';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loading() {
  const location = useLocation();
  const { difficulty, isProVersion, keywords } = location.state;

  const navigate = useNavigate();

  const [fairytale, setFairytale] = useState(false);

  const getHangmanWord = () => {
    const url = process.env.REACT_APP_BASE_URL_HANGMAN;

    return axios({
      url,
      method: 'GET',
    });
  };

  const getFairytale = () => {
    const url = `${process.env.REACT_APP_BASE_URL_FAIRYTALE}/${difficulty}`;
    const data = {
      keywords,
      fairytale: '',
      isSelection: '',
      count: '',
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  useEffect(() => {
    getHangmanWord()
      .then(function (response) {
        setHint(response.data.hint);
        setAnswer(response.data.word.toUpperCase());
      })
      .catch(function (error) {
        console.log(error);
      });
    getFairytale()
      .then(function (response) {
        setFairytale(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [isStart, setIsStart] = useState(false);

  const [answer, setAnswer] = useState('');
  const [hint, setHint] = useState('');

  const [failCount, setFailCount] = useState(0);
  const [correctAlphabets, setCorrectAlphabets] = useState([]);
  const [isFinish, setIsFinish] = useState(false);

  const handleClickStartGame = () => {
    setIsStart(true);
  };

  const handleClickGoFairytale = () => {
    navigate('/fairytale', {
      state: {
        fairytale,
        keywords,
        difficulty,
      },
    });
  };

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
        backgroundColor={!isFinish && isStart ? backgroundGray : 'white'}
        color={darkGray}
      >
        {!isStart ? (
          <LoadingContainer>
            <FairytaleCard type="game" />
            <LoadingText />
            <Button
              text="Start Game!"
              backgroundColor={darkMain}
              onClick={handleClickStartGame}
              font={'Jalnan'}
            />
          </LoadingContainer>
        ) : !isFinish ? (
          <LoadingContainer>
            <HangmanInfo hint={hint} />
            <AnswerDisplay />
            <HangmanCanvas />
            <AlphabetBox />
            {fairytale && (
              <Button
                text="동화책 보러가기"
                backgroundColor={darkMain}
                onClick={handleClickGoFairytale}
              />
            )}
          </LoadingContainer>
        ) : !fairytale ? (
          <LoadingContainer>
            <FairytaleCard />
            <LoadingText />
            <Button text="취소하기" backgroundColor={lightGray} />
          </LoadingContainer>
        ) : (
          <LoadingContainer>
            <LoadingFinish />
            <Button
              text="동화책 보러가기"
              backgroundColor={darkMain}
              onClick={handleClickGoFairytale}
            />
          </LoadingContainer>
        )}
      </Layout>
    </HangmanContext.Provider>
  );
}

const LoadingContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 16px;
`;

export default Loading;
