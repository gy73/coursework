import './ProductCard.css'
import { useCartStore } from '../../../stores/Card-store'

export default function ProductCard({designer, description, image, price}) {
    
    const addProduct = useCartStore((state) => state.addProduct)
    return(
        <>
        <div className="card">
            <img src={image} alt="" />
            <h2>{designer}</h2>
            <p>{description}</p>
            <p>{price} ₽</p>
        </div>
        <button onClick={addProduct}>Добавить в корзину</button>
        </>
    )
}