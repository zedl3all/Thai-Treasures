import Navbar from "../components/navbar/Navbar";
import { useCartStore } from '../middlewares/cartStore';

import '../css/global.css';

function Home() {
    const addToCart = useCartStore((state) => state.addToCart);
    const clearCart = useCartStore((state) => state.clearCart);

    return (
        <>
            <Navbar />
            <h1>HomePage</h1>
            <button onClick={addToCart}>
                Add to cart
            </button>
            <button onClick={clearCart}>
                Clear cart
            </button>
        </>

    );
}

export default Home;
