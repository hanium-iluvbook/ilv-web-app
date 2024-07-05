import styled from 'styled-components';
import VocabularyListItem from './VocabularyListItem';
import { useState } from 'react';
import { vocabularyList } from '../../dummy/vocabularyList';
import { blue, green, main, pink, purple } from '../../constants/colors';

function VocabularyListBox() {
  const [voca, setVoca] = useState(vocabularyList);
  const colors = [main, green, purple, pink, blue];

  return (
    <VocabularyItemBoxContainer>
      <LearningVoca>학습중인 단어장</LearningVoca>
      {voca.map((v, id) => (
        <VocabularyListItem
          key={id}
          title={v.title}
          finishCount={v.finishCount}
          totalCount={v.totalCount}
          color={colors[id % 5]}
        />
      ))}
    </VocabularyItemBoxContainer>
  );
}

const LearningVoca = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  padding: 24px 0px 2px 16px;
`;

const VocabularyItemBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default VocabularyListBox;
