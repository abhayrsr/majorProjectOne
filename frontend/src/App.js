import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MensPage from './pages/MensPage/MensPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/mens" element = {<MensPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
