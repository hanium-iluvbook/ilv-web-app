import styled from 'styled-components';
import Layout from '../components/Layout';
import { darkGray, whiteGray } from '../constants/colors';
import { ReactComponent as Add } from '../assets/add.svg';
import Profile from '../components/myVocabularyList/Profile';
import VocabularyListBox from '../components/myVocabularyList/VocaubularyListBox';

function MyVocabularyList() {
  return (
    <Layout backgroundColor={whiteGray} color={darkGray}>
      <VocabularyListContainer>
        <VocabularyListText>
          <VocabularyList>나만의 단어장</VocabularyList>
          <CreateVocabularyList>
            단어장 만들기
            <Add stroke={darkGray} />
          </CreateVocabularyList>
        </VocabularyListText>
        <Profile />
        <VocabularyListBox />
      </VocabularyListContainer>
    </Layout>
  );
}

const VocabularyListContainer = styled.div`
  width: 100%;
  min-height: calc(100vh -80px);
`;

const VocabularyListText = styled.div`
  display: flex;
  padding-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`;

const VocabularyList = styled.div`
  font-family: 'Jalnan';
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  padding-left: 20px;
`;

const CreateVocabularyList = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
  color: ${darkGray};
`;

export default MyVocabularyList;
