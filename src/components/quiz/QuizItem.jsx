import styled from 'styled-components';
import {
  blue,
  darkGray,
  gray,
  green,
  lightBlack,
  lightGray,
  main,
  whiteGray,
} from '../../constants/colors';
import { ReactComponent as CardBackground } from '../../assets/cardBackground.svg';
import { ReactComponent as True } from '../../assets/true.svg';
import { ReactComponent as False } from '../../assets/false.svg';
import { ReactComponent as Volume } from '../../assets/volume.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

function QuizItem({
  quiz_num,
  question,
  type,
  format,
  options,
  userAnswer,
  setUserAnswer,
}) {
  const [audioContent, setAudioContent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getAudioContent = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_TTS_API_KEY;
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

    const data = {
      input: { text: question },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  useEffect(() => {
    if (type === 'Listening Quiz') {
      getAudioContent()
        .then(function (response) {
          setAudioContent(response.data.audioContent);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [quiz_num]);

  const handleClickAnswer = (v) => {
    setUserAnswer(v);
  };

  const handlePlayAudio = () => {
    const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
    setIsPlaying(true);
    audio.play();

    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  const translateType = (v) => {
    if (v === 'Reading Comprehension Quiz') {
      return '독해 퀴즈';
    } else if (v === 'Grammar Quiz') {
      return '문법 퀴즈';
    } else if (v === 'Listening Quiz') {
      return '듣기 퀴즈';
    } else {
      return '창의력 퀴즈';
    }
  };

  return (
    <QuizItemContainer>
      {type !== 'Voca Quiz' ? (
        <QuizContainer>
          <QuizInfo>
            <QuizNum>Quiz.{quiz_num}</QuizNum>
            <QuizSector>{translateType(type)}</QuizSector>
          </QuizInfo>
          <Quiz>
            {type === 'Listening Quiz'
              ? '음성을 듣고 올바른 정답을 골라주세요.'
              : question}
          </Quiz>
          {audioContent && (
             <AudioButton $isPlaying={isPlaying} onClick={handlePlayAudio}>
             <Volume stroke={isPlaying ? main : '#5C5D61'} />
           </AudioButton>
          )}
        </QuizContainer>
      ) : (
        <WordQuizContainer>
          {question}
          <CardBackground style={{ position: 'absolute', top: 0, left: 0 }} />
        </WordQuizContainer>
      )}
      {format === 'Multiple Choice' && (
        <OptionContainer>
          {options.map((v, id) => (
            <Option
              key={id}
              $selected={userAnswer === String.fromCharCode(id + 65)}
              onClick={() => handleClickAnswer(String.fromCharCode(id + 65))}
            >
              <OptionNum
                $selected={userAnswer === String.fromCharCode(id + 65)}
              >
                {String.fromCharCode(id + 65)}
              </OptionNum>
              <OptionText>{v}</OptionText>
            </Option>
          ))}
        </OptionContainer>
      )}
      {format === 'True/False' && (
        <SelectContainer>
          <Select
            $selected={userAnswer === 'True'}
            onClick={() => handleClickAnswer('True')}
          >
            <True stroke={userAnswer === 'True' ? blue : gray} />
          </Select>
          <Select
            $selected={userAnswer === 'False'}
            onClick={() => handleClickAnswer('False')}
          >
            <False stroke={userAnswer === 'False' ? blue : gray} />
          </Select>
        </SelectContainer>
      )}
      {format === 'Short Answer' && (
        <ShortAnswerInput
          placeholder="답을 적어주세요!"
          value={userAnswer ?? ''}
          onChange={(e) => handleClickAnswer(e.target.value)}
        />
      )}
    </QuizItemContainer>
  );
}

const QuizItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const QuizContainer = styled.div`
  display: flex;
  width: 100%;
  height: 217px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid ${lightGray};
  background-color: white;
  box-shadow: 0px 4px 12.9px 0px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const QuizInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuizNum = styled.div`
  width: 58px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  background: ${blue};
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

const QuizSector = styled.div`
  color: ${darkGray};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
`;

const Quiz = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 140%;
`;

const WordQuizContainer = styled.div`
  width: 100%;
  aspect-ratio: 312/217;
  border-radius: 16px;
  background: ${green};
  box-shadow: 0px 4px 14.7px 0px rgba(0, 0, 0, 0.17);
  color: white;
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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
  background-color: ${(props) => (props.$selected ? '#E4F0FF' : 'white')};
  border: ${(props) => props.$selected && `1px dashed ${blue}`};
`;

const OptionNum = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  background-color: ${(props) => (props.$selected ? blue : lightGray)};
  color: ${(props) => props.$selected && 'white'};
`;

const OptionText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;

const SelectContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  gap: 16px;
`;

const Select = styled.div`
  width: 100%;
  background-color: ${(props) => (props.$selected ? '#E4F0FF' : 'white')};
  border: ${(props) => props.$selected && `1px dashed ${blue}`};
  border-radius: 16px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShortAnswerInput = styled.input`
  padding: 16px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${lightBlack};
  border: none;
  ::placeholder {
    color: ${lightGray};
  }
`;

const AudioButton = styled.div`
  display: flex;
  width: 60px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  border: 1px solid ${(props) => (props.$isPlaying ? main : lightGray)};
  background-color: ${(props) =>
    props.$isPlaying ? 'rgba(255, 159, 90, 0.08)' : whiteGray};
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

export default QuizItem;
