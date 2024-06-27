import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import SettingDifficulty from './pages/SettingDifficulty';
import CreateFairytale from './pages/CreateFairytale';
import Hangman from './pages/Hangman';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settingDifficulty" element={<SettingDifficulty />} />
          <Route path="/createFairytale" element={<CreateFairytale />} />
          <Route path="/hangman" element={<Hangman />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
