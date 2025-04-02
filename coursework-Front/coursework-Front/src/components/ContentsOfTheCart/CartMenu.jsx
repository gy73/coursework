import './CartMenu.css';

function CartMenu() {
    return(
        <>
        <div className="cart">
        <h1>Корзина</h1>
            <div className="cart-contents">
                <div className="cart-content">
                </div>
                <div className="cart-panel">
                    <div className="buttons">
                    <button className='buy-all-btn'>Оплатить всё</button>
                        <button className='buy-btn'>Оплатить</button>
                        <button className='dlt-btn'>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartMenu