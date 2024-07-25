import { useState } from 'react';
import styled from 'styled-components';
import { main, blue, green, purple, pink, red } from '../../constants/colors';
import { ReactComponent as Play } from '../../assets/play.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import KeywordsBox from '../common/KeywordsBox';
import KeywordsItem from '../common/KeywordsItem';

function Fairytale({ fairytaleInfo, id }) {
  const [isLike, setIsLike] = useState(fairytaleInfo.like);

  const handleClickLike = () => {
    setIsLike((prev) => !prev)
  }

  const colors = [main, blue, green, purple, pink];

  return fairytaleInfo ? (
    <FairytaleContainer color={colors[id % 5]}>
      <FairytaleInfo>
        <Title>{fairytaleInfo.title}</Title>
        <KeywordsBox keywords={fairytaleInfo.keywords} />
        <Btns>
          <StartBtn color={colors[id % 5]}>
            <Play fill={colors[id % 5]} />
            Start
          </StartBtn>
          <LikeBtn onClick={handleClickLike}>
            <Heart
              fill={isLike ? red : 'white'}
              fillOpacity={isLike ? 1 : 0.2}
              stroke={isLike ? 'red' : 'white'}
            />
          </LikeBtn>
        </Btns>
      </FairytaleInfo>
      <Circle />
      {fairytaleInfo.background ? (
        <Background src={fairytaleInfo.background} />
      ) : null}
    </FairytaleContainer>
  ) : null;
}

const FairytaleContainer = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 5px 0px #00000014;
  padding: 40px 20px;
`;

const FairytaleInfo = styled.div`
  position: relative;
  z-index: 3;
  color: white;
`;

const Title = styled.div`
  width: 80%;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
  color: white;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StartBtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 14px;
  color: ${(props) => props.color};
  background-color: white;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 300px;
  border: none;
  box-shadow: 0px 4px 13px 0px #0000001a;
  cursor: pointer;
`;

const LikeBtn = styled.div`
  cursor: pointer;
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: linear-gradient(
    117.36deg,
    rgba(255, 255, 255, 0.08) -5.77%,
    rgba(255, 255, 255, 0) 103.51%
  );
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 2;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
`;

export default Fairytale;
