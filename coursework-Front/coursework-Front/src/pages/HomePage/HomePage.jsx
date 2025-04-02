import Footer from '../../components/Footer/Footer';
import './HomePage.css'
import cartStore from '../../stores/cart-store';
import Header from '../../components/Header/Header';
import MainComponent from '../../components/Main/MainComponent';


function HomePage() {

  

  return (
    <>
    <Header/>
    <MainComponent/>
    <Footer/>
    </>
  );
}

export default HomePage;