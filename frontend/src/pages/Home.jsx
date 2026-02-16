
// Components
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/home/hero/Hero";
import FilterBar from "../components/home/filterbar/FilterBar";
import ProductContainer from "../components/home/productcontainer/ProductContainer"

// Assets
import '../css/global.css';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <FilterBar />
            <ProductContainer/>
        </>
    );
}

export default Home;
