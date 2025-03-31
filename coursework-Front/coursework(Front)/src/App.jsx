import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/Catalog' element={<Catalog/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
