import Navbar from "../components/navbar/Navbar";
import { useCartStore } from '../middlewares/cartStore';

import silkImage from '../assets/images/hero-image.jpg'
import ProductCard from '../components/ProductCard'

import '../css/global.css';

function Test() {
    const addToCart = useCartStore((state) => state.addToCart);
    const clearCart = useCartStore((state) => state.clearCart);

    return (
        <>
            <Navbar />
            <h1>Test Page</h1>
            <button onClick={addToCart}>
                Add to cart
            </button>
            <button onClick={clearCart}>
                Clear cart
            </button>

            <ProductCard
                image={silkImage}
                category="Textiles"
                location="Chiang Mai"
                title="Traditional Thai Silk Scarf"
                rating={4.8}
                reviews={124}
                price={1250}
            />
            <ProductCard
            />
        </>

    );
}

export default Test;
