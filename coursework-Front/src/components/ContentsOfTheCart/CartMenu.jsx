import './CartMenu.css';
import {useCartStore} from '../../stores/Card-store';
import CartCard from './CartCard/CartCard';



function CartMenu() {
const products = useCartStore((state) => state.products)
const removeProduct = useCartStore((state) => state.removeProduct)

    return (
            <div className="cart">
                <h1>Корзина</h1>
                <div className="cart-contents">
                    <div className="cart-content">
                        
                    
                    </div>
                    <div className="cart-panel">
                        <div className="cart-buttons">
                            <button className='buy-all-btn'>Оплатить всё</button>
                            <button className='buy-btn'>Оплатить</button>
                            <button className='dlt-btn' onClick={(e) => removeProduct(products.id)}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CartMenu