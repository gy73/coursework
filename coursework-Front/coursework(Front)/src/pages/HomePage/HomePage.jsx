import './HomePage.css';
import ModalWindow from '../../components/Header/ModalWindow/ModalWindow';
import cartIMG from '/img/cart.png';
import Footer from '../../components/Footer/Footer';
import ProductsCards from '../../components/Main/Products/ProductCards';
import { useNavigate } from 'react-router-dom';


function HomePage() {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/cart')
  } 

  return (
    <>
    <header className="header" >
      <div className='container'>
        <div className="navbar">
        <ModalWindow/>
        <button className='cartImgButton' onClick={handleClick}><img src={cartIMG} alt=""/></button>
        </div>
      </div>
    </header>
    <main className='main'>
      <div className='container'>
        <ProductsCards />
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