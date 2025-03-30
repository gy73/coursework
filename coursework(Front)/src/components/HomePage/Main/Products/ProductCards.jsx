import { products } from "./Products";
import ProductCard from './ProductCard.jsx'
import './ProductsCards.css'

export default function ProductsCards() {
    return (
        <>
            <div className="products-cards">
                <div className={"cards"}>
                    {products.map((p,i) =>(
                        <ProductCard
                            key={i}
                            designer={p.designer}
                            description={p.description}
                            image={p.image}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}