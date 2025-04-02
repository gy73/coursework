import { useNavigate } from "react-router-dom";
import cartStore from "../../stores/cart-store";
import ModalWindow from "./ModalWindow/ModalWindow";
import { Link } from "react-router-dom";
import cartIMG from '/img/cart.png';
import './Header.css'

function Header() {

  const navigateCart = useNavigate();
  
  const handleClickCart = () => {
    navigateCart('/cart')
  } 

  return (
    <>
    <header className="header" >
      <div className='container'>
        <div className="navbar">
        <ModalWindow/>
        <div className="buttons">
          <button className='cartImgButton' onClick={handleClickCart}><img src={cartIMG} alt=""/></button>
          
          <Link to='/Registration'><button className="Registration">Регистрация</button></Link>
          <Link to='/SignIn'><button className="SignIn">Вход</button></Link>
        </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;