import styled from 'styled-components';
import Tools from './Tools';
import { useEffect, useState } from 'react';
import { darkGray, main, purple, whiteGray } from '../../../constants/colors';
import { ReactComponent as Chevron } from '../../../assets/chevron.svg';

function Content({
  displayWidth,
  fairytale,
  page,
  setPage,
  selectedOptions,
  translateText,
  setTranslateText,
  audioContent,
  setAudioContent,
  text,
  setText,
}) {
  const [isTranslate, setIsTranslate] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  const handleClickAccordion = () => {
    setIsOpening((prev) => !prev);
  };

  const [content, setContent] = useState(fairytale[page / 2].content);
  const [imgUrl, setImgUrl] = useState(fairytale[page / 2].imgURL);

  useEffect(() => {
    setIsTranslate(false);
    setIsOpening(false);
    setContent(fairytale[page / 2].content);
    setImgUrl(fairytale[page / 2].imgURL);
  }, [page]);

  useEffect(() => {
    // 페이지 변경 시, 해당 페이지에 이모티콘 제외 텍스트가 없는 경우
    if (page % 2 === 0 && !text[page / 2]) {
      const newText = [...text];
      newText[page / 2] = content.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ''
      );
      setText(newText);
    }
  }, [content]);

  return (
    <ContentContainer>
      <FairytaleImg $displayWidth={displayWidth} $src={imgUrl}>
        {page > 0 && (
          <Accordion>
            <AccordionIcon
              $isOpening={isOpening}
              onClick={handleClickAccordion}
            >
              <Chevron />
            </AccordionIcon>
            {isOpening && (
              <OptionContainer>
                <Option>
                  <OptionNum>
                    {String.fromCharCode(selectedOptions[page / 2 - 1].id + 65)}
                  </OptionNum>
                  <OptionTitle>
                    {selectedOptions[page / 2 - 1].optionTitle}
                  </OptionTitle>
                </Option>
                <OptionContent>
                  {selectedOptions[page / 2 - 1].optionContent}
                </OptionContent>
              </OptionContainer>
            )}
          </Accordion>
        )}
      </FairytaleImg>
      {isTranslate ? (
        <FairytaleTextContainer $isTranslate={isTranslate}>
          {content.split('.').map(
            (s, id) =>
              s && (
                <TextContainer key={id}>
                  <FairytaleText>{s}.</FairytaleText>
                  {translateText[page / 2] && (
                    <TranslateText>
                      {translateText[page / 2][id].replaceAll('&quot;', '"')}
                    </TranslateText>
                  )}
                </TextContainer>
              )
          )}
        </FairytaleTextContainer>
      ) : (
        <FairytaleTextContainer>
          {content.split('.').map(
            (s, id) =>
              s && (
                <TextContainer key={id}>
                  <FairytaleText>{s}.</FairytaleText>
                </TextContainer>
              )
          )}
        </FairytaleTextContainer>
      )}
      <Tools
        page={page}
        setPage={setPage}
        text={text[page / 2]}
        isTranslate={isTranslate}
        setIsTranslate={setIsTranslate}
        translateText={translateText}
        setTranslateText={setTranslateText}
        audioContent={audioContent}
        setAudioContent={setAudioContent}
        fairytale={fairytale}
      />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FairytaleImg = styled.div`
  width: ${(props) => props.$displayWidth}px;
  aspect-ratio: 600 / 400;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(4, 4, 4, 0.27) 40px,
      rgba(46, 46, 46, 0) 60px,
      rgba(255, 255, 255, 0) 67.68%,
      rgba(255, 255, 255, 0.33) 79.32%,
      #fff 100%
    ),
    url(${(props) => props.$src});
  background-size: cover;
  position: relative;
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  bottom: 20px;
  right: 10px;
  gap: 8px;
`;

const AccordionIcon = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.3);
  transform: rotate(${(props) => (props.$isOpening ? '0' : '180deg')});
`;

const OptionContainer = styled.div`
  display: flex;
  width: 400px;
  padding: 18px 16px 16px 16px;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid ${purple};
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OptionNum = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 300px;
  background-color: ${purple};
  font-family: 'Jalnan';
  font-size: 12px;
  font-weight: 400;
  color: white;
`;

const OptionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: ${purple};
`;

const OptionContent = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
`;

const FairytaleTextContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 36px;
    background-color: ${main};
    box-shadow: 1px 2px 3.8px 0px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-track {
    border-radius: 36px;
    background-color: ${whiteGray};
  }
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FairytaleText = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 180%;
`;

const TranslateText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${darkGray};
`;

export default Content;
