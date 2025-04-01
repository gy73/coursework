import './HomePage.css';
import ModalWindow from '../../components/Header/ModalWindow/ModalWindow';
import cartIMG from '/img/cart.png';
import Footer from '../../components/Footer/Footer';
import ProductsCards from '../../components/Main/Products/ProductCards';
import { useNavigate } from 'react-router-dom';
import cartStore from '../../stores/cart-store';


function HomePage() {

  const {cart, addProduct} = cartStore

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
          <button className="Registration">Регистрация</button>
          <button className="SignIn">Вход</button>
        </div>
        </div>
      </div>
    </header>
    <main className='main'>
      <div className='container'>
        <ProductsCards onClick={addProduct}/>
      </div>
    </main>
    <footer className='footer'>
      <div className='container'>
          <Footer/>
      </div>
    </footer>
    </>
  );
}

export default HomePage;