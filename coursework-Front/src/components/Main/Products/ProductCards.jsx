import { product } from "../Products.js";
import ProductCard from '../Product/ProductCard.jsx'
import './ProductsCards.css'

export default function ProductsCards() {
    return (
        <>
            <div className="products-cards">
                <div className={"cards"}>
                    {product.map((p,i) =>(
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
            </div>

        </>
    )
}