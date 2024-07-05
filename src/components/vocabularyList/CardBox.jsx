import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { wordList } from '../../dummy/wordList';
import CardItem from './CardItem';
import { gray, green } from '../../constants/colors';

function CardBox() {
  const [word, setWord] = useState(wordList);

  const [positionId, setPositionId] = useState(0);
  const [pageId, setPageId] = useState(0);
  const [isAnimate, setIsAnimate] = useState(true);

  useEffect(() => {
    if (positionId === -1) {
      setTimeout(() => {
        setPositionId(word.length - 1);
        setIsAnimate(false);
      }, 500);
    } else if (positionId === word.length) {
      setTimeout(() => {
        setPositionId(0);
        setIsAnimate(false);
      }, 500);
    }
    setPageId((positionId + word.length) % word.length);
  }, [positionId, word.length]);

  useEffect(() => {
    if (!isAnimate) {
      setTimeout(() => {
        setIsAnimate(true);
      }, 50);
    }
  }, [isAnimate]);

  const [widthInfo, setWidthInfo] = useState({
    displayWidth: 0,
    visibleCard: 0,
    nonVisibleCard: 0,
    gap: 0,
    total: () => 0,
  });

  useEffect(() => {
    const updateWidthInfo = () => {
      const displayWidth = window.innerWidth >= 600 ? 600 : window.innerWidth;
      setWidthInfo({
        displayWidth,
        visibleCard: (312 / 600) * displayWidth,
        nonVisibleCard: (240 / 600) * displayWidth,
        gap: (25 / 600) * displayWidth,
        total(wordLength) {
          return (
            (312 / 600) * displayWidth +
            (240 / 600) * displayWidth * (wordLength + 3) +
            (25 / 600) * displayWidth * (wordLength + 3)
          );
        },
      });
    };

    updateWidthInfo();

    window.addEventListener('resize', updateWidthInfo);

    return () => {
      window.removeEventListener('resize', updateWidthInfo);
    };
  }, [word.length]);

  return (
    <BoxContainer $displayWidth={widthInfo.displayWidth}>
      <CardBoxContainer
        $gap={widthInfo.gap}
        $total={widthInfo.total(word.length)}
        $displayWidth={widthInfo.displayWidth}
        $visibleCard={widthInfo.visibleCard}
        $nonVisibleCard={widthInfo.nonVisibleCard}
        $pageId={positionId}
        $wordLength={word.length}
        $isAnimate={isAnimate}
      >
        <CardItem
          id={-2}
          visibleCard={widthInfo.visibleCard}
          nonVisibleCard={widthInfo.nonVisibleCard}
          word={word[word.length - 2]}
          visible={false}
          positionId={positionId}
          setPositionId={setPositionId}
        />
        <CardItem
          id={-1}
          visibleCard={widthInfo.visibleCard}
          nonVisibleCard={widthInfo.nonVisibleCard}
          word={word[word.length - 1]}
          visible={positionId === -1}
          positionId={positionId}
          setPositionId={setPositionId}
        />
        {word.map((w, id) => (
          <CardItem
            key={id}
            id={id}
            visibleCard={widthInfo.visibleCard}
            nonVisibleCard={widthInfo.nonVisibleCard}
            word={w}
            visible={id === pageId}
            positionId={positionId}
            setPositionId={setPositionId}
          />
        ))}
        <CardItem
          id={word.length}
          visibleCard={widthInfo.visibleCard}
          nonVisibleCard={widthInfo.nonVisibleCard}
          word={word[0]}
          visible={positionId === word.length}
          positionId={positionId}
          setPositionId={setPositionId}
        />
        <CardItem
          id={word.length + 1}
          visibleCard={widthInfo.visibleCard}
          nonVisibleCard={widthInfo.nonVisibleCard}
          word={word[1]}
          visible={false}
          positionId={positionId}
          setPositionId={setPositionId}
        />
      </CardBoxContainer>
      <Pagenation>
        {word.map((_, id) => (
          <Page key={id} selected={id === pageId} />
        ))}
      </Pagenation>
    </BoxContainer>
  );
}

const BoxContainer = styled.div`
  width: ${(props) => props.$displayWidth}px;
  position: relative;
  aspect-ratio: 600/560;
  display: flex;
  justify-content: center;
  padding-top: 70px;
`;

const CardBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.$gap}px;
  position: absolute;
  left: -${(props) => (3 / 2) * props.$nonVisibleCard + props.$gap}px;
  transform: translateX(
    ${(props) =>
      -(props.$nonVisibleCard + props.$gap) * props.$pageId -
      (props.$pageId === props.$wordLength
        ? props.$visibleCard - props.$nonVisibleCard
        : 0)}px
  );
  transition: transform ${(props) => (props.$isAnimate ? '0.5s' : 0)};
`;

const Pagenation = styled.div`
  display: flex;
  gap: 8px;
`;

const Page = styled.div`
  width: ${(props) => (props.selected ? '24px' : '10px')};
  height: 10px;
  background-color: ${(props) => (props.selected ? green : gray)};
  border-radius: 300px;
  align-self: flex-end;
`;

export default CardBox;
