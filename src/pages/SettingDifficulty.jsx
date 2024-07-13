import styled from 'styled-components';
import {
  darkGray,
  darkMain,
  green,
  red,
  lightBlack,
  backgroundGray,
} from '../constants/colors';
import Difficulty from '../components/settingDifficulty/Difficulty';
import Layout from '../components/Layout';

function SettingDifficulty() {
  const difficultyInfo = [
    {
      difficulty: 'low',
      title: '영유아',
      info: '4세에서 7세의 아이들에게',
      border: '#FFE178',
      background: '#FAD75A',
      color: darkMain,
    },
    {
      difficulty: 'mid',
      title: '초등학교 저학년',
      info: '8세에서 10세의 아이들에게',
      border: '#B2F76D',
      background: '#A1E75C',
      color: green,
    },
    {
      difficulty: 'high',
      title: '초등학교 고학년',
      info: '10세에서 13세의 아이들에게',
      border: '#FFA9A9',
      background: '#FF8E8E',
      color: red,
    },
  ];

  return (
    <Layout backgroundColor={backgroundGray} color={darkGray}>
      <SettingDifficultyTitle>난이도 설정</SettingDifficultyTitle>
      <SettingDifficultyInfo>
        선택된 나이에따라 교과 과정에 맞는
        <br /> 동화 생성, 퀴즈, 단어장이 만들어져요
      </SettingDifficultyInfo>
      <DifficultyBox>
        {difficultyInfo.map((difficulty, id) => (
          <Difficulty
            key={id}
            difficulty={difficulty.difficulty}
            title={difficulty.title}
            info={difficulty.info}
            border={difficulty.border}
            background={difficulty.background}
            color={difficulty.color}
          />
        ))}
      </DifficultyBox>
    </Layout>
  );
}

const SettingDifficultyTitle = styled.div`
  font-family: 'Jalnan';
  font-size: 24px;
  line-height: 26px;
  padding-bottom: 8px;
  color: ${lightBlack};
  display: flex;
  justify-content: center;
`;

const SettingDifficultyInfo = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  color: ${darkGray};
  text-align: center;
  padding-bottom: 18px;
`;

const DifficultyBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
`;

export default SettingDifficulty;
