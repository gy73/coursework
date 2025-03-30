import './HomePage.css';
import ModalWindow from './Header/ModalWindow/ModalWindow';
import cartIMG from '/img/cart.png';
import Footer from "./Footer/Footer.jsx";

import ProductsCards from './Main/Products/ProductCards';

function HomePage() {
  return (
    <>
    <header className="header" >
      <div className='container'>
        <div className="navbar">
        <ModalWindow/>
        <button className='cartImgButton'><img src={cartIMG} alt=""/></button>
        </div>
      </div>
    </header>
    <main className='container'>
      <div className=''>
        <ProductsCards/>
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