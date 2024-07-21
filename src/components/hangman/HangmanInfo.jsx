import styled from 'styled-components';
import { blue, darkGray, darkMain, lightBlack } from '../../constants/colors';
import { HangmanContext } from '../../context/HangmanContext';
import { useContext } from 'react';
import { ReactComponent as Sticker } from '../../assets/sticker.svg';

function HangmanInfo({ hint }) {
  const { failCount, answer, correctAlphabets } = useContext(HangmanContext);

  return (
    <HangmanInfoContainer>
      <HangmanInfoBox>
        <HangmanTitle>Hangman Time!</HangmanTitle>
        <HanmanDes>
          멋진 동화책이 만들어지고있어요
          <br />
          Hangman게임을 하며 기다려볼까요?
        </HanmanDes>
      </HangmanInfoBox>
      <Hint>
        <HintTitle>Hint!</HintTitle>
        {hint}
        {correctAlphabets.length === new Set(answer.split('')).size && (
          <StickerContainer>
            <StyledSticker fill={darkMain} />
            <StickerText>Great!</StickerText>
          </StickerContainer>
        )}
        {failCount > 5 && (
          <StickerContainer>
            <StyledSticker fill="black" />
            <StickerText>Lose</StickerText>
          </StickerContainer>
        )}
      </Hint>
    </HangmanInfoContainer>
  );
}

const HangmanInfoContainer = styled.div`
  width: 100%;
`;

const HangmanInfoBox = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 8px;
`;

const HangmanTitle = styled.div`
  font-family: 'Jalnan';
  font-size: 24px;
  line-height: 30px;
  color: ${lightBlack};
`;

const HanmanDes = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  color: ${darkGray};
  text-align: center;
`;

const Hint = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: white;
  box-shadow: 0px 4px 12.9px 0px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  position: relative;
`;

const HintTitle = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 300px;
  border: 1px solid ${blue};
  color: ${blue};
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

const StickerContainer = styled.div`
  position: absolute;
  right: 0;
  width: 133px;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const StyledSticker = styled(Sticker)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StickerText = styled.div`
  font-family: 'Jalnan';
  font-size: 24px;
  font-weight: 700;
  line-height: 9.066px;
  color: white;
  z-index: 3;
  transform: rotate(27.466deg);
  text-align: center;
`;

export default HangmanInfo;
