
// Components
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/home/hero/Hero";
import FilterBar from "../components/home/filterbar/FilterBar";

// Assets
import '../css/global.css';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <FilterBar />

        </>
    );
}

export default Home;
