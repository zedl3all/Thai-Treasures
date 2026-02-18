import { useState, useMemo } from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";

import ProductCard from "../../ProductCard";
import { PRODUCTS } from "../../product";
import { useSearchParams } from "react-router-dom";


function ProductContainer() {
    const [sortBy, setSortBy] = useState("featured");
    const [searchParams] = useSearchParams();
    const province = searchParams.get("province");

    const filteredProducts = useMemo(() => {
        if (!province || province === "AllProvinces") {
            return PRODUCTS;
        }

        return PRODUCTS.filter((p) => p.province === province);
    }, [province]);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedProducts = useMemo(() => {
        const items = [...filteredProducts];

        switch (sortBy) {
            case "priceLow":
                return items.sort((a, b) => a.price - b.price);

            case "priceHigh":
                return items.sort((a, b) => b.price - a.price);

            case "rating":
                return items.sort((a, b) => b.rating - a.rating);

            case "newest":
                return items.sort((a, b) => b.id - a.id);

            default:
                return items; // featured (default order)
        }
    }, [sortBy, filteredProducts]);

    return (
        <Box sx={{
            background: "linear-gradient(180deg, #181A1B 80%, #222 100%)",
            minHeight: "100vh",
            py: { xs: 2, sm: 4, md: 6 }
        }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        py: { xs: 1, sm: 2 },
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", sm: "center" },
                        flexDirection: { xs: "column", sm: "row" },
                        flexWrap: "wrap",
                        gap: 2
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                color: "#FF8A65",
                                fontSize: { xs: 20, sm: 24 }
                            }}
                        >
                            {province && province !== "All Provinces"
                                ? `${province} Products`
                                : "Featured Products"}
                        </Typography>

                        <Typography sx={{ color: "#bdb7ae", fontSize: { xs: 14, sm: 16 } }}>
                            {sortedProducts.length} items available
                        </Typography>
                    </Box>

                    <FormControl size="small" sx={{
                        width: { xs: '100%', sm: '160px', md: '210px' },
                        height: '44px',
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#181a1b',
                            color: 'white',
                            border: '1px solid #434343',
                            borderRadius: '8px',
                            height: '44px',
                            paddingLeft: '8px',
                            fontFamily: 'Arimo, sans-serif',
                            fontSize: { xs: '13px', md: '14px' },
                            '&:hover fieldset': {
                                borderColor: '#434343',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#d48a67',
                            },
                        },
                        '& .MuiSvgIcon-root': {
                            color: '#b1aaa0',
                        }
                    }}>
                        <Select
                            value={sortBy}
                            onChange={handleSortChange}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: '#181a1b',
                                        color: 'white',
                                        borderRadius: '8px',
                                        border: '1px solid #434343',
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

                <Box sx={{ mt: { xs: 1, sm: 2 } }}>
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 3, md: 4 }}
                        sx={{
                            justifyContent: { xs: 'center', md: 'flex-start' },
                        }}
                    >
                        {sortedProducts.map((p) => (
                            <Grid
                                item
                                key={p.id}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                xl={2.4}
                                sx={{
                                    display: "flex",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                                        "&:hover": {
                                            transform: "translateY(-8px) scale(1.025)",
                                            boxShadow: "0 8px 32px 0 rgba(255,138,101,0.12)",
                                        },
                                    }}
                                >
                                    <ProductCard
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
                </Box>
            </Container>
        </Box>
    );
}

export default ProductContainer;