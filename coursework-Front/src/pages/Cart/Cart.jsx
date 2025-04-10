import CartMenu from "../../components/ContentsOfTheCart/CartMenu";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Cart() {
  
  const handleClickCart = () => {
    navigateCart('/cart')
  } 

    return(
        <>
        <Header/>
      <main className="main">
        <div className="container">
        <CartMenu/>
          </div>  
      </main>
          <Footer/>
        </>
    )
}

export default Cart