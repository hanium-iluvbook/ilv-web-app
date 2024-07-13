import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import CardBox from '../components/vocabularyList/CardBox';
import Title from '../components/vocabularyList/Title';
import { darkGray, whiteGray } from '../constants/colors';

function VocabularyList() {
  const location = useLocation();

  return (
    <Layout backgroundColor={whiteGray} color={darkGray} title={'단어장'}>
      <Title title={location.state.title} />
      <CardBox word={location.state.words} />
    </Layout>
  );
}

export default VocabularyList;
