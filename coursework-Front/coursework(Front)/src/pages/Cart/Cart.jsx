import CartMenu from "../../components/ContentsOfTheCart/CartMenu";
import Footer from "../../components/Footer/Footer";
import ModalWindow from "../../components/Header/ModalWindow/ModalWindow"
import cartIMG from '/img/cart.png';

function Cart() {
  
    return(
        <>
        <header className="header" >
      <div className='container'>
        <div className="navbar">
        <ModalWindow/>
        <button className='cartImgButton'><img src={cartIMG} alt=""/></button>
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