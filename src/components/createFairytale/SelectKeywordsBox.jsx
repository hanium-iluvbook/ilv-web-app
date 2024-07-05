import styled from 'styled-components';
import SelectKeywordsItem from './SelectKeywordsItem';
import { whiteGray } from '../../constants/colors';
import { useEffect, useState } from 'react';

function SelectKeywordsBox({ setIsActive, selectedInfo, setSelectedInfo }) {
  const [keywordInfo, setKeywordInfo] = useState([
    {
      title: '누구/무엇에 관한 이야기면 좋겠나요?',
      subject: '주인공',
      count: 2,
      keywords: [
        '👤 사람',
        '🐾 동물',
        '👽 외계인',
        '🌭 음식',
        '🕹 사물',
        '🦕 공룡',
      ],
    },
    {
      title: '주인공의 이름은 뭔가요?',
      subject: '이름',
      count: 2,
      keywords: ['지은', '진', '영규', '현아', '상익'],
    },
    {
      title: '어디서 일어나는 일인가요?',
      subject: '배경',
      count: 2,
      keywords: [
        '🎡 놀이공원',
        '🏫 학교',
        '🏕️ 숲',
        '🏔️ 동굴',
        '🏰 왕국',
        '🪐 우주',
      ],
    },
    {
      title: '어떤 세계를 탐험하고싶나요?',
      subject: '장르',
      count: 2,
      keywords: [
        '🏕 모험',
        '🦄 판타지',
        '🦸‍♂️ 액션',
        '💀 호러',
        '🧙‍♂️ 마법',
        '🏛️ 과거',
      ],
    },
  ]);

  useEffect(() => {
    if (
      selectedInfo.traits.length > 0 &&
      selectedInfo.characters.length > 0 &&
      selectedInfo.settings.length > 0 &&
      selectedInfo.genre.length > 0
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [selectedInfo]);

  return (
    <SelectKeywordsBoxContainer>
      <Box>
        <SelectKeywordsItem
          id={0}
          selectedInfo={selectedInfo}
          category="traits"
          setSelectedInfo={setSelectedInfo}
          keywordInfo={keywordInfo}
          setKeywordInfo={setKeywordInfo}
        />
        <Hr />
        <SelectKeywordsItem
          id={1}
          selectedInfo={selectedInfo}
          category="characters"
          setSelectedInfo={setSelectedInfo}
          keywordInfo={keywordInfo}
          setKeywordInfo={setKeywordInfo}
        />
      </Box>
      <Box>
        <SelectKeywordsItem
          id={2}
          selectedInfo={selectedInfo}
          category="settings"
          setSelectedInfo={setSelectedInfo}
          keywordInfo={keywordInfo}
          setKeywordInfo={setKeywordInfo}
        />
      </Box>
      <Box>
        <SelectKeywordsItem
          id={3}
          selectedInfo={selectedInfo}
          category="genre"
          setSelectedInfo={setSelectedInfo}
          keywordInfo={keywordInfo}
          setKeywordInfo={setKeywordInfo}
        />
      </Box>
    </SelectKeywordsBoxContainer>
  );
}

const SelectKeywordsBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Hr = styled.hr`
  width: 100%;
  border: 1px dashed ${whiteGray};
`;

const Box = styled.div`
  display: flex;
  padding: 24px 0px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${whiteGray};
  background-color: white;
  box-shadow: 0px 4px 14.1px 0px rgba(0, 0, 0, 0.08);
`;

export default SelectKeywordsBox;
