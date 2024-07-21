import styled from 'styled-components';
import {
  blue,
  darkGray,
  lightGray,
  main,
  whiteGray,
} from '../../constants/colors';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as Volume } from '../../assets/volume.svg';

function Problem({ quiz_num, quiz_type, question, voca }) {
  const [audioContent, setAudioContent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getAudioContent = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_TTS_API_KEY;
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

    const data = {
      input: { text: voca },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3', speakingRate: 0.7 },
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  useEffect(() => {
    if (quiz_type === 'Listening Quiz') {
      getAudioContent()
        .then(function (response) {
          setAudioContent(response.data.audioContent);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [quiz_num]);

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
    } else if (v === 'Voca Quiz') {
      return '단어 퀴즈';
    } else {
      return '창의력 퀴즈';
    }
  };

  return (
    <ProblemContainer $type={quiz_type}>
      <QuizInfo>
        <QuizNum>Quiz.{quiz_num}</QuizNum>
        <QuizSector>{translateType(quiz_type)}</QuizSector>
      </QuizInfo>
      <Quiz>
        {quiz_type === 'Listening Quiz'
          ? '음성을 듣고 올바른 정답을 골라주세요.'
          : question}
      </Quiz>
      {quiz_type === 'Listening Quiz' && (
        <AudioButton $isPlaying={isPlaying} onClick={handlePlayAudio}>
          <Volume stroke={isPlaying ? main : '#5C5D61'} />
        </AudioButton>
      )}
    </ProblemContainer>
  );
}

const ProblemContainer = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 312 / ${(props) => (props.$type === 'Voca Quiz' ? 60 : 108)};
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

export default Problem;
