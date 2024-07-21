import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import SettingDifficulty from './pages/SettingDifficulty';
import CreateFairytale from './pages/CreateFairytale';
import Loading from './pages/Loading';
import Fairytale from './pages/Fairytale';
import MyVocabularyList from './pages/MyVocabularyList';
import VocabularyList from './pages/VocabularyList';
import Quiz from './pages/Quiz';
import MyQuiz from './pages/MyQuiz';
import QuizResult from './pages/QuizResult';
import QuizAnswer from './pages/QuizAnswer';
import OptionalFairytale from './pages/OptionalFairytale';
import MyBadge from './pages/MyBadge';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settingDifficulty" element={<SettingDifficulty />} />
          <Route path="/createFairytale" element={<CreateFairytale />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/fairytale" element={<Fairytale />} />
          <Route path="/optionalFairytale" element={<OptionalFairytale />} />
          <Route path="/myVocabularyList" element={<MyVocabularyList />} />
          <Route path="/vocabularyList" element={<VocabularyList />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/myQuiz" element={<MyQuiz />} />
          <Route path="/quizResult" element={<QuizResult />} />
          <Route path="/quizAnswer" element={<QuizAnswer />} />
          <Route path="/myBadge" element={<MyBadge />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
