import styled from 'styled-components';
import ToolButton from '../common/ToolButton';
import { lightBlack, main } from '../../constants/colors';
import { ReactComponent as Volume } from '../../assets/volume.svg';
import { ReactComponent as Translate } from '../../assets/translate.svg';
import axios from 'axios';
import { useEffect } from 'react';

function ReadingHelper({
  text,
  page,
  translateText,
  setTranslateText,
  audioContent,
  setAudioContent,
  isTranslate,
  setIsTranslate,
  isPlaying,
  setIsPlaying,
}) {
  const getTranslateContent = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_TTS_API_KEY;
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const data = {
      q: text
        .split('.')
        .filter((v) => v !== '')
        .map((v) => v.concat('.')),
      source: 'en',
      target: 'ko',
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  const getAudioContent = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_TTS_API_KEY;
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

    const data = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3', speakingRate: 0.7 },
    };

    return axios({
      url,
      method: 'POST',
      data,
    });
  };

  const handleClickTranslate = () => {
    if (!translateText[page]) {
      getTranslateContent()
        .then(function (response) {
          const newTranslate = [...translateText];
          newTranslate[page] = response.data.data.translations.map(
            (t) => t.translatedText
          );
          setTranslateText(newTranslate);
          setIsTranslate((prev) => !prev);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setIsTranslate((prev) => !prev);
    }
  };

  const handleClickSpeech = () => {
    if (isPlaying) return; // 음성 재생 중일 경우 리턴
    setIsPlaying(true);

    // 음성 컨텐츠가 없을 경우 API 요청 후 재생, 있을 경우 요청 없이 재생
    if (!audioContent[page]) {
      getAudioContent()
        .then(function (response) {
          const newAudioContent = [...audioContent];
          newAudioContent[page] = new Audio(
            `data:audio/mp3;base64,${response.data.audioContent}`
          );
          setAudioContent(newAudioContent);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      const audio = audioContent[page];
      audio.play();
      audio.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  useEffect(() => {
    console.log(audioContent);
    if (isPlaying && audioContent[page]) {
      audioContent[page].play();
      audioContent[page].onended = () => {
        setIsPlaying(false);
      };
    }
  }, [audioContent]);

  return (
    <ReadingHelperContainer>
      <ToolButton width={60} focus={isTranslate} onClick={handleClickTranslate}>
        <Translate fill={isTranslate ? main : lightBlack} />
      </ToolButton>
      <ToolButton width={60} focus={isPlaying} onClick={handleClickSpeech}>
        <Volume stroke={isPlaying ? main : lightBlack} />
      </ToolButton>
    </ReadingHelperContainer>
  );
}

const ReadingHelperContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default ReadingHelper;
