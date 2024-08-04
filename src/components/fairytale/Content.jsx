import styled from 'styled-components';
import Tools from './Tools';
import { useContext, useEffect, useState } from 'react';
import { darkGray, main, whiteGray } from '../../constants/colors';
import { FairytaleContext } from '../../context/FairytaleContext';

function Content({ displayWidth }) {
  const { fairytale, page, text, setText, translateText } =
    useContext(FairytaleContext);

  const [isTranslate, setIsTranslate] = useState(true);

  useEffect(() => {
    setIsTranslate(false);
    // 페이지 변경 시, 해당 페이지에 이모티콘 제외 텍스트가 없는 경우
    if (!text[page]) {
      const newText = [...text];
      newText[page] = fairytale.pages[page].content.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ''
      );
      setText(newText);
    }
  }, [page]);

  return (
    <ContentContainer>
      <FairytaleImg
        $displayWidth={displayWidth}
        $src={fairytale.pages[page].imgURL}
      />
      {isTranslate ? (
        <FairytaleTextContainer $isTranslate={isTranslate}>
          {fairytale.pages[page].content.split('.').map(
            (s, id) =>
              s && (
                <TextContainer key={id}>
                  <FairytaleText>{s}.</FairytaleText>
                  {translateText[page] && (
                    <TranslateText>
                      {translateText[page][id].replaceAll('&quot;', '"')}
                    </TranslateText>
                  )}
                </TextContainer>
              )
          )}
        </FairytaleTextContainer>
      ) : (
        <FairytaleTextContainer>
          {fairytale.pages[page].content.split('.').map(
            (s, id) =>
              s && (
                <TextContainer key={id}>
                  <FairytaleText>{s}.</FairytaleText>
                </TextContainer>
              )
          )}
        </FairytaleTextContainer>
      )}
      <Tools isTranslate={isTranslate} setIsTranslate={setIsTranslate} />
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
`;

const FairytaleTextContainer = styled.div`
  width: 100%;
  min-height: 45%;
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
