import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MensPage from './pages/MensPage/MensPage';
import './App.css';
import ProductPage from './pages/ProductPage/ProductPage';
import WishListPage from './pages/WishlistPage/WishList';
import AddToCartPage from './pages/AddToCartPage/AddToCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/mens" element = {<MensPage />} />
          <Route path="/product/:id" element= {<ProductPage />} />
          <Route path="/wishlist" element= {<WishListPage />} />
          <Route path="/addtocart" element= {<AddToCartPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
