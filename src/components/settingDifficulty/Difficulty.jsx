import styled from 'styled-components';
import { ReactComponent as Play } from '../../assets/play.svg';
import { Link } from 'react-router-dom';

function Difficulty({ difficulty, title, info, border, background, color }) {
  return (
    <DifficultyContainer
      $border={border}
      $background={background}
      color={color}
    >
      <DifficultyTitle>{title}</DifficultyTitle>
      <DifficultyInfo>
        {info}
        <br />
        추천하는 난이도에요
      </DifficultyInfo>
      <Link to="/createFairytale" state={{ difficulty: difficulty }}>
        <StartBtn color={color}>
          시작하기
          <Play fill={color} />
        </StartBtn>
      </Link>
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
  align-items: flex-start;
  gap: 4px;
  background-color: white;
  color: ${(props) => props.color};
  border-radius: 300px;
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export default Difficulty;
