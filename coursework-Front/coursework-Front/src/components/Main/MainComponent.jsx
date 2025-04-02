import ProductsCards from '../../components/Main/Products/ProductCards';
import cartStore from '../../stores/cart-store';


function MainComponent() {

  const {cart, addProduct} = cartStore
  return (
    <>
    <main className='main'>
      <div className='container'>
        <ProductsCards onClick={addProduct}/>
      </div>
    </main>
    </>
  );
}

export default MainComponent;