import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tape from './pages/Tape/Tape';
import SignIn from './pages/SignIn/SignIn';
import Registration from './pages/Registration/Registration';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery'
import Categories from './pages/Categories/Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/tape' element={<Tape/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/passwordrecovery' element={<PasswordRecovery/>}></Route>
        <Route path='/designers' element={<Categories/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
