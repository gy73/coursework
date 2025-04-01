import CartMenu from "../../components/ContentsOfTheCart/CartMenu";
import Footer from "../../components/Footer/Footer";
import ModalWindow from "../../components/Header/ModalWindow/ModalWindow"
import cartIMG from '/img/cart.png';

function Cart() {
  
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
        <div className="container">
        <CartMenu/>
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

export default Cart