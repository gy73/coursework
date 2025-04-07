import './CartMenu.css';
import useCartStore from '../../stores/Card-store';

const products = useCartStore((state) => state.products)
const removeProduct = useCartStore((state) => state.removeProduct)

function CartMenu() {
    return(
        <>
        <div className="cart">
        <h1>Корзина</h1>
            <div className="cart-contents">
                <div className="cart-content">
                    {products.map((p, i) => (
                        <ProductCard
                        key={i}
                        id={p.id}
                        designer={p.designer}
                        description={p.description}
                        image={p.image}
                        price={p.price}
                    />
                    ))}
                </div>
                <div className="cart-panel">
                    <div className="buttons">
                    <button className='buy-all-btn'>Оплатить всё</button>
                        <button className='buy-btn'>Оплатить</button>
                        <button className='dlt-btn' onClick={(e) => removeProduct(products.id)}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartMenu