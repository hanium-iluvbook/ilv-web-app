import Layout from '../components/Layout';
import MyQuizBox from '../components/myQuiz/MyQuizBox';
import { darkGray, whiteGray } from '../constants/colors';

function MyQuiz() {
  return (
    <Layout backgroundColor={whiteGray} color={darkGray}>
      <MyQuizBox />
    </Layout>
  );
}

export default MyQuiz;
