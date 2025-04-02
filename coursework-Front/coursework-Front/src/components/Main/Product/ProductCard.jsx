import './ProductCard.css'

export default function ProductCard({designer, description, image,price}) {
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{designer}</h2>
            <p>{description}</p>
            <p>{price} ₽</p>
            <button className={"card-btn"}>В корзину</button>
        </div>
    )
}