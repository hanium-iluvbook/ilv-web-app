import styled from 'styled-components';
import background from '../../assets/particle.png';
import { darkGray, purple } from '../../constants/colors';
import ReviewItem from './ReviewItem';
import Tools from './Tools';
import OptionalTools from './optionalFairytale/Tools';
import quizBanner from '../../assets/quizBanner.png';
import vocaListBanner from '../../assets/vocaListBanner.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Technologist } from '../../assets/Technologist.svg';

function LastChapter({ page, setPage, level, title, content, fairytale }) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [create, setCreate] = useState('퀴즈')

  const getQuiz = () => {
    const url = process.env.REACT_APP_BASE_URL_QUIZZES;
    const data = {
      level,
      title,
      content,
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  const getWord = () => {
    const url = process.env.REACT_APP_BASE_URL_WORDS;
    const data = {
      level,
      title,
      content,
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  const handleClickQuizBtn = () => {
    if (isLoading) return;
    setCreate('퀴즈')
    setIsLoading(true);

    getQuiz()
      .then(function (response) {
        navigate('/quiz', {
          state: {
            quizzes: response.data.quizzes,
            level,
            title
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClickVocaListBtn = () => {
    if (isLoading) return;
    setCreate('단어장')
    setIsLoading(true);

    getWord()
      .then(function (response) {
        navigate('/vocabularyList', {
          state: {
            words: response.data.words,
            title,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <LastChapterContainer $src={background}>
      <RecommandText>
        <RecommandTextTitle>동화를 더 즐겨볼까요?</RecommandTextTitle>
        <RecommandTextInfo>
          단어장도 만들고 퀴즈도 풀어보며
          <br />
          동화를 색다르게 즐겨봐요 :)
        </RecommandTextInfo>
      </RecommandText>
      <ReviewBox>
        <ReviewItem
          title="퀴즈 풀고 실력 UP!"
          info="내가 만든 동화로 재밌는 퀴즈를 풀어볼까요?"
          button="퀴즈 풀어보기"
          background={quizBanner}
          color={purple}
          onClick={handleClickQuizBtn}
        />
        <ReviewItem
          title="단어장을 만들자!"
          info="내가 만든 동화에서 나오는 단어를 오랬동안 간직해봐요!"
          button="단어장 만들기"
          background={vocaListBanner}
          color="#6DB8D8"
          onClick={handleClickVocaListBtn}
        />
      </ReviewBox>
      {page > 3 ? (
        <OptionalTools page={page} setPage={setPage} fairytale={fairytale} />
      ) : (
        <Tools page={page} setPage={setPage} />
      )}
      {isLoading && (
        <LoadingContainer>
          <Technologist />
          <LoadingTextContainer>
            <LoadingText> 끄적끄적 ~ 잠시만 기다려주세요!</LoadingText>
            <LoadingText>{create}를 제작중입니다.</LoadingText>
          </LoadingTextContainer>
        </LoadingContainer>
      )}
    </LastChapterContainer>
  );
}

const LastChapterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  position: relative;
`;

const RecommandText = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

const RecommandTextTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 21px;
`;

const RecommandTextInfo = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: ${darkGray};
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const LoadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const LoadingText = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`;

export default LastChapter;
