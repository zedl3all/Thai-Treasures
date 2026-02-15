import Navbar from "../components/navbar/Navbar";
import { useCartStore } from '../middlewares/cartStore';

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
        </>

    );
}

export default Test;
