import Footer from "../../components/Footer/Footer"
import ProductsCards from "../../components/Main/Products/ProductCards";
import './Tape.css'
import cartStore from "../../stores/cart-store";
import Header from "../../components/Header/Header";


function Catalog() {
  const {cart, addProduct} = cartStore

    return(
        <>
        <Header/>
    <main className="main">
      <h1>Лента</h1>
        <div className="container">
        <div className="tape">
          <ProductsCards onClick={addProduct}/>
          <ProductsCards onClick={addProduct}/>
          </div>
        </div>  
      </main>
          <Footer/>
        </>
    )
}

export default Catalog