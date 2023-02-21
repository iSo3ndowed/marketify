import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Hero from './Hero';
import Main from './Main';
import Navbar from './Navbar';
import Furnitures from './Accessories'
import Clothes from './Shoes'
import Shoes from './Clothes'
import Accessories from './Furnitures'
import CartProvider from './cartContext';


function App() {
  return (
    <CartProvider>
      <Router>
      <div className="App">
        <Navbar/>
        <Hero/>
        <Main/>
        <Routes>
          <Route exact path='/Clothes.js'
            element={<Shoes/>}
          />
          <Route exact path='/Furnitures.js'
            element={<Accessories/>}
          />
          <Route exact path='/Shoes.js'
            element={<Clothes/>}
          />
          <Route exact path='/Accessories.js'
            element={<Furnitures/>}
          />
        </Routes>
        <Footer/>
      </div>
      </Router>
    </CartProvider>
  );
}

export default App;
