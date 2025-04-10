import './CartCard.css'

export default function CartCard({designer, description, image,price}) {
    return(
        <div className="cart-card">
            <img src={image} className='cart-img' alt="" />
            <h2>{designer}</h2>
            <p>{description}</p>
            <p>{price} ₽</p>
        </div>
    )
}