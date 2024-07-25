import styled from 'styled-components';
import { ReactComponent as Play } from '../../assets/play.svg';
import { Link } from 'react-router-dom';
import difficultyYellow from '../../assets/difficultyYellow.png';
import difficultyGreen from '../../assets/difficultyGreen.png';
import difficultyRed from '../../assets/difficultyRed.png';
import { ReactComponent as RabbitBaby } from '../../assets/rabbitBaby.svg';
import { ReactComponent as RabbitLower } from '../../assets/rabbitLower.svg';
import { ReactComponent as RabbitUpper } from '../../assets/RabbitUpper.svg';

function Difficulty({
  difficulty,
  title,
  info,
  border,
  background,
  color,
  keywords,
}) {
  return (
    <DifficultyContainer
      $border={border}
      $background={background}
      $title={title}
      color={color}
    >
      <Content>
        <DifficultyTitle>{title}</DifficultyTitle>
        <DifficultyInfo>
          {info}
          <br />
          추천하는 난이도에요
        </DifficultyInfo>
        <Link
          to="/loading"
          state={{ isProVersion: false, difficulty, keywords }}
        >
          <StartBtn color={color}>
            시작하기
            <Play fill={color} />
          </StartBtn>
        </Link>
      </Content>

      {title === '영유아' ? (
        <RabbitBaby style={{ position: 'absolute', top: 0, right: 0 }} />
      ) : title === '초등학교 저학년' ? (
        <RabbitLower style={{ position: 'absolute', top: 0, right: 0 }} />
      ) : (
        <RabbitUpper style={{ position: 'absolute', top: 0, right: 0 }} />
      )}
    </DifficultyContainer>
  );
}

const DifficultyContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  border-radius: 12px;
  border: 4px solid ${(props) => props.$border};
  background: ${(props) => props.$background};
  box-shadow: 0px 4px 36.1px 0px rgba(106, 106, 255, 0.17);
  padding: 0px 18px;
  background-repeat: no-repeat;
  position: relative;
  background-image: url(${(props) =>
    props.$title === '영유아'
      ? difficultyYellow
      : props.$title === '초등학교 저학년'
      ? difficultyGreen
      : difficultyRed});
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
`;

const DifficultyTitle = styled.div`
  margin-top: 25px;
  font-size: 24px;
  font-weight: 800;
  line-height: 26px;
  color: white;
  margin-bottom: 8px;
`;

const DifficultyInfo = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 132%;
  color: white;
  margin-bottom: 30px;
`;

const StartBtn = styled.div`
  display: inline-flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  background-color: white;
  color: ${(props) => props.color};
  border-radius: 300px;
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export default Difficulty;
