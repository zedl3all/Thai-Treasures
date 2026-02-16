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

function ProductContainer() {
    const [sortBy, setSortBy] = useState("featured");

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedProducts = useMemo(() => {
        const items = [...PRODUCTS];

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
    }, [sortBy]);

    return (
        <Box>
            <Container>
                <Box
                    sx={{
                        py: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 2
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", color: "#FF8A65" }}
                        >
                            Featured Products
                        </Typography>

                        <Typography>
                            {sortedProducts.length} items available
                        </Typography>
                    </Box>

                    <FormControl size="small" sx={{
                        width: { md: '140px', lg: '210px' },
                        height: '44px',
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#181a1b',
                            color: 'white',
                            border: '1px solid #434343',
                            borderRadius: '8px',
                            height: '44px',
                            paddingLeft: '8px',
                            fontFamily: 'Arimo, sans-serif',
                            fontSize: { md: '13px', lg: '14px' },
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

                <Box sx={{ mt: 2 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 3, md: 4 }}
                        sx={{
                            justifyContent: 'center',
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
                                sx={{
                                    display: "flex",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
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