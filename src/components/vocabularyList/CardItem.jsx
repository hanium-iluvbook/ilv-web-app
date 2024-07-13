import styled from 'styled-components';
import { green } from '../../constants/colors';
import { ReactComponent as CardBackground } from '../../assets/cardBackground.svg';
import { useEffect, useState } from 'react';

function CardItem({
  id,
  visibleCard,
  nonVisibleCard,
  word,
  visible,
  positionId,
  setPositionId,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickedCard = () => {
    if (visible) {
      setIsFlipped((prev) => !prev);
    } else {
      setPositionId(id);
    }
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [positionId]);

  return (
    <World
      width={visible ? visibleCard : nonVisibleCard}
      onClick={handleClickedCard}
    >
      <CardItemContainer $visible={visible} $isFlipped={isFlipped}>
        <FrontCard $visible={visible} $isFlipped={isFlipped}>
          <Word>{word.voca}</Word>
          <CardBackground
            width={visible ? visibleCard : nonVisibleCard}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: visible ? 1 : 0.2,
            }}
          />
        </FrontCard>
        <FlippedCard $visible={visible} $isFlipped={isFlipped}>
          <Word>{word.translation}</Word>
          <CardBackground
            width={visible ? visibleCard : nonVisibleCard}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: visible ? 1 : 0.2,
            }}
          />
        </FlippedCard>
      </CardItemContainer>
    </World>
  );
}

const World = styled.div`
  width: ${(props) => props.width}px;
  aspect-ratio: 312 / 380;
  perspective: 500px;
`;

const CardItemContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: rotateY(0deg);
  transform: ${(props) =>
    props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 14.063px;
  box-shadow: 0px 3.516px 12.92px 0px rgba(0, 0, 0, 0.17);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$visible ? green : '#e0ecac')};
  backface-visibility: hidden;
  z-index: 1;
`;

const FlippedCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 14.063px;
  box-shadow: 0px 3.516px 12.92px 0px rgba(0, 0, 0, 0.17);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$visible ? green : '#e0ecac')};
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Word = styled.div`
  font-size: clamp(16px, 8vw, 45px);
  font-weight: 700;
  line-height: 50px;
  color: white;
`;

export default CardItem;
