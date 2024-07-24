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

  const difficulty = location.state?.difficulty;
  const isProVersion = location.state?.isProVersion;
  const keywords = location.state?.keywords;

  const navigate = useNavigate();

  const [fairytale, setFairytale] = useState();

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

  const getOptionalFairytale = () => {
    const url = `${process.env.REACT_APP_BASE_URL_FAIRYTALE}/game/select`;
    const data = {
      keywords,
      fairytale: '',
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  useEffect(() => {
    if (!location.state) {
      navigate('/createFairytale');
    } else {
      getHangmanWord()
        .then(function (response) {
          setHint(response.data.hint);
          setAnswer(response.data.word.toUpperCase());
          if (isProVersion) {
            getOptionalFairytale()
              .then(function (response) {
                setFairytale(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            getFairytale()
              .then(function (response) {
                setFairytale(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  const [isStart, setIsStart] = useState(false);

  const [answer, setAnswer] = useState('');
  const [hint, setHint] = useState('');

  const [failCount, setFailCount] = useState(0);
  const [correctAlphabets, setCorrectAlphabets] = useState([]);
  const [isFinish, setIsFinish] = useState(false);

  const handleClickStartGame = () => {
    if (!hint || !answer) return;
    setIsStart(true);
  };

  const handleClickGoFairytale = () => {
    setFailCount(0);
    setIsFinish(false);
    if (isProVersion) {
      navigate('/optionalFairytale', {
        state: {
          fairytale,
          keywords,
        },
      });
    } else {
      navigate('/fairytale', {
        state: {
          fairytale,
          keywords,
          difficulty,
        },
      });
    }
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
              backgroundColor={!hint || !answer ? lightGray : darkMain}
              onClick={handleClickStartGame}
              font={'Jalnan'}
            >
              Start Game!
            </Button>
          </LoadingContainer>
        ) : !isFinish ? (
          <LoadingContainer>
            <HangmanInfo hint={hint} />
            <AnswerDisplay />
            <HangmanCanvas />
            <AlphabetBox />
            {fairytale && (
              <Button
                backgroundColor={darkMain}
                onClick={handleClickGoFairytale}
              >
                동화책 보러가기
              </Button>
            )}
          </LoadingContainer>
        ) : !fairytale ? (
          <LoadingContainer>
            <FairytaleCard />
            <LoadingText />
            <Button backgroundColor={lightGray}>취소하기</Button>
          </LoadingContainer>
        ) : (
          <LoadingContainer>
            <LoadingFinish />
            <Button backgroundColor={darkMain} onClick={handleClickGoFairytale}>
              동화책 보러가기
            </Button>
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
