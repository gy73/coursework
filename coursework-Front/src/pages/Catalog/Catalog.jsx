import Footer from "../../components/Footer/Footer"
import ProductsCards from "../../components/Main/Products/ProductCards";
import './Catalog.css'
import Header from "../../components/Header/Header";


function Catalog() {


    return(
        <>
        <Header/>
    <main className="main">
      <h1>Каталог</h1>
        <div className="container">
        <div className="tape">
          <ProductsCards/>
          <ProductsCards/>
          </div>
        </div>  
      </main>
          <Footer/>
        </>
    )
}

export default Catalog