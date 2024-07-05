import { useState } from 'react';
import styled from 'styled-components';
import { main, blue, green, purple, pink, red } from '../../constants/colors';
import { ReactComponent as Play } from '../../assets/play.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';

function Fairytale({ fairytaleInfo, id }) {
  const [fairytale, setFairytale] = useState(fairytaleInfo);
  const colors = [main, blue, green, purple, pink];

  return fairytale ? (
    <FairytaleContainer color={colors[id % 5]}>
      <FairytaleInfo>
        <Title>{fairytale.title}</Title>
        <Keywords>
          {fairytale.keywords.map((keyword, id) => (
            <Keyword key={id}>{keyword}</Keyword>
          ))}
        </Keywords>
        <Btns>
          <StartBtn color={colors[id % 5]}>
            <Play fill={colors[id % 5]} />
            Start
          </StartBtn>
          <LikeBtn>
            <Heart
              fill={fairytale.like ? red : 'white'}
              fillOpacity={fairytale.like ? 1 : 0.2}
              stroke={fairytale.like ? 'red' : 'white'}
            />
          </LikeBtn>
        </Btns>
      </FairytaleInfo>
      <Circle />
      {fairytale.background ? <Background src={fairytale.background} /> : null}
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

const Keywords = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Keyword = styled.div`
  width: 108px;
  height: 26px;
  background: #ffffff29;
  border: 1px solid #ffffff14;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  border-radius: 300px;
  margin-bottom: 30px;
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
`

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
