import Layout from '../components/Layout';
import CardBox from '../components/vocabularyList/CardBox';
import Title from '../components/vocabularyList/Title';
import { darkGray, whiteGray } from '../constants/colors';

function VocabularyList() {
  return (
    <Layout backgroundColor={whiteGray} color={darkGray} title={'단어장'}>
      <Title />
      <CardBox />
    </Layout>
  );
}

export default VocabularyList;
