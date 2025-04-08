import { products } from "../Products.js";
import ProductCard from '../Product/ProductCard.jsx'
import './ProductsCards.css'
import { useCartStore } from "../../../stores/Card-store.js";

export default function ProductsCards() {

    return (
        <>
            <div className="products-cards">
                <div className={"cards"}>
                    {products.map((p,i) =>(
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