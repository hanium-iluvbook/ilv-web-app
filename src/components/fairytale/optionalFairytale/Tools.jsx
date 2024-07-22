import styled, { keyframes } from 'styled-components';
import ToolButton from '../../common/ToolButton';
import {
  gray,
  lightBlack,
  lightGray,
  main,
  whiteGray,
} from '../../../constants/colors';
import { ReactComponent as Play } from '../../../assets/play.svg';
import { ReactComponent as Star } from '../../../assets/star.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReadingHelper from '../ReadingHelper';
import axios from 'axios';

function Tools({
  page,
  setPage,
  text,
  isTranslate,
  setIsTranslate,
  translateText,
  setTranslateText,
  audioContent,
  setAudioContent,
  selected,
  fairytale,
  setFairytale,
  keywords,
  selectedOptions,
  setSelectedOptions,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getOptionalFairytale = () => {
    const url = `${process.env.REACT_APP_BASE_URL_FAIRYTALE}/game/select`;
    const data = {
      keywords,
      fairytale: fairytale
        .map((f) => f?.content)
        .join('')
        .concat(selected.optionContent),
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  const getEndOptionalFairytale = () => {
    const url = `${process.env.REACT_APP_BASE_URL_FAIRYTALE}/game/end`;
    const data = {
      keywords,
      fairytale: fairytale
        .map((f) => f?.content)
        .join('')
        .concat(selected.optionContent),
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  useEffect(() => {
    setIsPlaying(false);
    if (audioContent) {
      audioContent.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    }
  }, [page]);

  const handleClickNextPageSwitcher = () => {
    // 이미 선택한 옵션 페이지를 방문할 경우 경우 다음 동화 페이지로 이동
    if (fairytale[1 + page / 2]) {
      setPage((prev) => prev + 2);
      return;
    }
    setPage((prev) => prev + 1);
  };

  const handleClickBeforePageSwitcher = () => {
    // 로딩 중일 경우 이전 버튼 비활성화
    if (isLoading) return;
    // 이미 선택한 옵션 페이지를 방문할 경우 이전 동화 페이지로 이동
    if (fairytale[page / 2]) {
      setPage((prev) => prev - 2);
      return;
    }
    setPage((prev) => prev - 1);
  };

  const handleClickSelectOption = () => {
    // 로딩 중일 경우 선택형 동화 요청 비활성화
    if (isLoading) return;

    // 선택한 옵션 정보 상태, 로딩 상태 업데이트
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[(page - 1) / 2] = selected;
    setSelectedOptions(newSelectedOptions);
    setIsLoading(true);

    if (page === 5) {
      // 마지막 페이지일 경우
      getEndOptionalFairytale()
        .then(function (response) {
          const newFairytale = [...fairytale];
          newFairytale[(page + 1) / 2] = response.data;
          setFairytale(newFairytale);
          handleClickNextPageSwitcher();
          setIsLoading(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      getOptionalFairytale()
        .then(function (response) {
          const newFairytale = [...fairytale];
          newFairytale[(page + 1) / 2] = response.data;
          setFairytale(newFairytale);
          handleClickNextPageSwitcher();
          setIsLoading(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <ToolsContainer>
      <ToolsItem>
        {page < 7 && page % 2 === 0 && (
          <ReadingHelper
            text={text}
            page={page / 2}
            translateText={translateText}
            setTranslateText={setTranslateText}
            audioContent={audioContent}
            setAudioContent={setAudioContent}
            isTranslate={isTranslate}
            setIsTranslate={setIsTranslate}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )}
        <PageNationBox>
          {new Array(8)
            .fill(0)
            .map((_, id) =>
              (id % 2 === 0 || id === 7) ? (
                <PageNationItem key={id} $isNowPage={page === id} />
              ) : (
                !fairytale[(id + 1) / 2] && (
                  <Star key={id} fill={page === id ? main : lightGray} />
                )
              )
            )}
        </PageNationBox>
      </ToolsItem>
      <PageSwitcher>
        {/** 로딩 */}
        {isLoading && (
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        )}
        {/** 이전 페이지 버튼 */}
        {page > 0 && (
          <ToolButton width={48} onClick={handleClickBeforePageSwitcher}>
            <Play fill={lightBlack} style={{ rotate: '180deg' }} />
          </ToolButton>
        )}
        {/** 다음 페이지 버튼 */}
        {page < 7 && page % 2 === 0 && (
          <ToolButton width={48} onClick={handleClickNextPageSwitcher}>
            <Play fill={lightBlack} />
          </ToolButton>
        )}
        {/** 옵션 선택 버튼 */}
        {page < 7 && page % 2 !== 0 && (
          <SelectButton $selected={selected} onClick={handleClickSelectOption}>
            선택 <Play fill={selected ? 'white' : gray} />
          </SelectButton>
        )}
        {/** 나가기 버튼 */}
        {page === 7 && (
          <Link to="/">
            <ExitButton>
              Exit <Play fill="white" />
            </ExitButton>
          </Link>
        )}
      </PageSwitcher>
    </ToolsContainer>
  );
}

const ToolsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
`;

const ToolsItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const PageNationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PageNationItem = styled.div`
  width: ${(props) => (props.$isNowPage ? 24 : 10)}px;
  height: 10px;
  border-radius: 300px;
  background-color: ${(props) => (props.$isNowPage ? main : lightGray)};
`;

const PageSwitcher = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const rotate = keyframes`
    to {
    transform: rotate(1turn);
  }
`;

const LoadingSpinner = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid ${whiteGray};
  border-radius: 50%;
  border-top-color: ${main};
  animation: ${rotate} 0.8s infinite ease-in-out;
`;

const SelectButton = styled.div`
  display: flex;
  padding: 0px 16px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 300px;
  background-color: ${(props) => (props.$selected ? main : whiteGray)};
  color: ${(props) => (props.$selected ? 'white' : gray)};
  ${(props) => props.$selected && { cursor: 'pointer' }}
`;

const ExitButton = styled.div`
  display: flex;
  padding: 0px 16px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 300px;
  background-color: ${main};
  color: white;
  cursor: pointer;
`;

export default Tools;
