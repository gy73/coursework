import ModalWindow from "../../components/Header/ModalWindow/ModalWindow"
import Footer from "../../components/Footer/Footer"

function Catalog() {
    return(
        <>
        <header className="header" >
      <div className='container'>
        <div className="navbar">
        <ModalWindow/>
        <button className='cartImgButton' onClick={handleClick}><img src={cartIMG} alt=""/></button>
        </div>
      </div>
    </header>

    <footer className='footer'>
      <div className='container'>
          <Footer/>
      </div>
    </footer>
    </>
    )
}

export default Catalog