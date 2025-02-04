import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MensPage from './pages/MensPage/MensPage';
import './App.css';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/mens" element = {<MensPage />} />
          <Route path="/product/:id" element= {<ProductPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
