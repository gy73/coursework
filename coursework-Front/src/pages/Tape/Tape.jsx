import ModalWindow from "../../components/Header/ModalWindow/ModalWindow"
import Footer from "../../components/Footer/Footer"
import { useNavigate } from "react-router-dom";
import cartIMG from '/img/cart.png';
import ProductsCards from "../../components/Main/Products/ProductCards";
import './Tape.css'
import cartStore from "../../stores/cart-store";


function Catalog() {
  const {cart, addProduct} = cartStore

  const navigateCart = useNavigate();
  
  const handleClickCart = () => {
    navigateCart('/cart')
  } 

    return(
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
    <main className="main">
      <h1>Лента</h1>
        <div className="container">
        <div className="tape">
          <ProductsCards onClick={addProduct}/>
          <ProductsCards onClick={addProduct}/>
          </div>
        </div>  
      </main>
    <footer className='footer'>
      <div className='container'>
          <Footer/>
      </div>
    </footer>
    </>
    )
}

export default Catalog