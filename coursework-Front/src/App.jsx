import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tape from './pages/Tape/Tape';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/tape' element={<Tape/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
