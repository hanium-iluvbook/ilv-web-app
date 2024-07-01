import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import SettingDifficulty from './pages/SettingDifficulty';
import CreateFairytale from './pages/CreateFairytale';
import Loading from './pages/Loading';
import Fairytale from './pages/OptionalFairytale';
import MyVocabularyList from './pages/MyVocabularyList';
import VocabularyList from './pages/VocabularyList';

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
          <Route path="/myVocabularyList" element={<MyVocabularyList />} />
          <Route path="/vocabularyList" element={<VocabularyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
