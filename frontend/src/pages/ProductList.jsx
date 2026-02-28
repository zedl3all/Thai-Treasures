import {
    Container,
    Box,
    Typography,
    Grid,
    FormControl,
    Select,
    MenuItem,
} from '@mui/material';
import { useState, useMemo } from "react";
import ProductCard from '../components/ProductCard';
import Navbar from "../components/navbar/Navbar";
import Footer from '../components/footer';
import { useSearchParams } from "react-router-dom";
import ProductFilterSidebar from '../components/ProductFilterSidebar';
import { PRODUCTS } from "../components/product";
import { PROVINCES } from "../components/provinces";

function ProductList() {
    const [searchParams] = useSearchParams();
    const province = searchParams.get("province");

    const [sortBy, setSortBy] = useState("featured");
    const [selectedProvinces, setSelectedProvinces] = useState(() => {
        const provinces = searchParams.get("provinces");
        if (!provinces) return [];
        if (provinces === "AllProvinces") return PROVINCES.map((p) => p.value);
        return provinces.split(",").filter(Boolean);
    });
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({ label: 'All Range', min: 0, max: Infinity });
    const [minRating, setMinRating] = useState(0);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const filteredProducts = useMemo(() => {
        let products = PRODUCTS;

        if (province && province !== "AllProvinces") {
            products = products.filter((p) => p.province === province);
        }
        if (selectedProvinces.length > 0) {
            products = products.filter((p) => selectedProvinces.includes(p.province));
        }
        if (selectedCategories.length > 0) {
            products = products.filter((p) => selectedCategories.includes(p.category));
        }
        products = products.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);
        products = products.filter((p) => p.rating >= minRating);

        return products;
    }, [province, selectedProvinces, selectedCategories, priceRange, minRating]);

    const sortedProducts = useMemo(() => {
        const items = [...filteredProducts];
        switch (sortBy) {
            case "priceLow":  return items.sort((a, b) => a.price - b.price);
            case "priceHigh": return items.sort((a, b) => b.price - a.price);
            case "rating":    return items.sort((a, b) => b.rating - a.rating);
            case "newest":    return items.sort((a, b) => b.id - a.id);
            default:          return items;
        }
    }, [sortBy, filteredProducts]);

    return (
        <>
            <Navbar displayDropdown="none" />

            {/* ── Page wrapper ── */}
            <Container
                maxWidth="xl"
                sx={{
                    px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
                    py: { xs: 2, sm: 3, md: 4 },
                    minHeight: '80vh',
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: { xs: 0, md: 3, lg: 4 },
                        alignItems: "flex-start",
                    }}
                >
                    {/* ── Sidebar (desktop sticky / mobile FAB handled inside component) ── */}
                    <ProductFilterSidebar
                        selectedProvinces={selectedProvinces}
                        setSelectedProvinces={setSelectedProvinces}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        minRating={minRating}
                        setMinRating={setMinRating}
                    />

                    {/* ── Main content ── */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>

                        {/* ── Header bar ── */}
                        <Box
                            sx={{
                                py: { xs: 1, sm: 1.5 },
                                mb: { xs: 2, sm: 3, md: 4 },
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: { xs: "flex-start", sm: "center" },
                                flexDirection: { xs: "column", sm: "row" },
                                gap: { xs: 1.5, sm: 0 },
                                borderBottom: '1px solid #2c2f30',
                                pb: { xs: 2, sm: 2.5 },
                            }}
                        >
                            {/* Title + count */}
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#FF8A65",
                                        fontSize: { xs: 18, sm: 22, md: 26 },
                                        letterSpacing: '-0.3px',
                                        lineHeight: 1.2,
                                    }}
                                >
                                    All Products
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#7a7470",
                                        fontSize: { xs: 12, sm: 13, md: 14 },
                                        mt: 0.4,
                                    }}
                                >
                                    {sortedProducts.length} products found
                                </Typography>
                            </Box>

                            {/* Sort control */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    width: { xs: '100%', sm: 'auto' },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#9e9990',
                                        fontSize: { xs: 13, sm: 14 },
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    Sort by:
                                </Typography>
                                <FormControl
                                    size="small"
                                    sx={{
                                        flex: { xs: 1, sm: 'none' },
                                        width: { xs: '100%', sm: '170px', md: '200px' },
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#181a1b',
                                            color: 'white',
                                            border: '1px solid #3b4043',
                                            borderRadius: '8px',
                                            height: '40px',
                                            fontSize: { xs: '13px', md: '14px' },
                                            fontFamily: 'Arimo, sans-serif',
                                            transition: 'border-color 0.2s',
                                            '&:hover fieldset': { borderColor: '#FF8A65' },
                                            '&.Mui-focused fieldset': { borderColor: '#FF8A65' },
                                        },
                                        '& .MuiSvgIcon-root': { color: '#7a7470' },
                                    }}
                                >
                                    <Select
                                        value={sortBy}
                                        onChange={handleSortChange}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    backgroundColor: '#1e2021',
                                                    color: 'white',
                                                    borderRadius: '8px',
                                                    border: '1px solid #3b4043',
                                                    mt: 0.5,
                                                    '& .MuiMenuItem-root:hover': {
                                                        bgcolor: 'rgba(255,138,101,0.08)',
                                                    },
                                                    '& .MuiMenuItem-root.Mui-selected': {
                                                        bgcolor: 'rgba(255,138,101,0.14)',
                                                        color: '#FF8A65',
                                                    },
                                                }
                                            }
                                        }}
                                    >
                                        <MenuItem value="featured">Featured</MenuItem>
                                        <MenuItem value="priceLow">Price: Low to High</MenuItem>
                                        <MenuItem value="priceHigh">Price: High to Low</MenuItem>
                                        <MenuItem value="rating">Rating</MenuItem>
                                        <MenuItem value="newest">Newest</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>

                        {/* ── Empty state ── */}
                        {sortedProducts.length === 0 && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    py: { xs: 8, md: 12 },
                                    gap: 1.5,
                                    opacity: 0.45,
                                }}
                            >
                                <Typography sx={{ fontSize: { xs: 40, md: 52 } }}>🔍</Typography>
                                <Typography sx={{ color: '#9e9990', fontSize: { xs: 14, sm: 15 } }}>
                                    No products match your filters
                                </Typography>
                            </Box>
                        )}

                        {/* ── Product grid ── */}
                        {sortedProducts.length > 0 && (
                            <Grid
                                container
                                spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3 }}
                                justifyContent="center"
                            >
                                {sortedProducts.map((p) => (
                                    <Grid
                                        item
                                        key={p.id}
                                        sm={6}
                                        md={4}
                                        lg={3}
                                        xl={2.4}
                                        sx={{ display: "flex", justifyContent: "center" }}
                                    >
                                        <Box
                                            sx={{
                                                width: "100%",
                                                transition: "transform 0.28s cubic-bezier(.4,2,.6,1), box-shadow 0.28s ease",
                                                "&:hover": {
                                                    transform: "translateY(-6px) scale(1.02)",
                                                    boxShadow: "0 12px 36px rgba(255,138,101,0.14)",
                                                },
                                            }}
                                        >
                                            <ProductCard
                                                id={p.id}
                                                image={p.image}
                                                category={p.category}
                                                location={p.province}
                                                title={p.title}
                                                rating={p.rating}
                                                reviews={p.reviews}
                                                price={p.price}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        )}

                        {/* ── Bottom padding for mobile FAB clearance ── */}
                        <Box sx={{ height: { xs: 88, md: 0 } }} />
                    </Box>
                </Box>
            </Container>

            <Footer />
        </>
    );
}

export default ProductList;