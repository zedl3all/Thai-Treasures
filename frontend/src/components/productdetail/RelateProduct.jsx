import { Paper, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useCartStore } from "../../middlewares/cartStore";
import ProductCard from "../ProductCard";
import { PRODUCTS } from "../product";

function RelateProduct({ currentProductId }) {
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);

    // สุ่มสินค้า 8 ชิ้น (ไม่เอาตัวปัจจุบัน)
    const randomProducts = useMemo(() => {
        // หาสินค้าปัจจุบัน
        const currentProduct = PRODUCTS.find(
            p => p.id === currentProductId
        );

        if (!currentProduct) return [];

        //* หาที่ category หรือ province ตรง
        let filtered = PRODUCTS.filter(
            p =>
                p.id !== currentProductId &&
                (
                    p.category === currentProduct.category ||
                    p.province === currentProduct.province
                )
        );

        //* ถ้าไม่พอ 4 ชิ้น เอาทุกตัว (ยกเว้นตัวเอง) มาเติม
        if (filtered.length < 4) {
            filtered = PRODUCTS.filter(p => p.id !== currentProductId);
        }

        //* สุ่ม
        const shuffled = [...filtered].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 8);
    }, [currentProductId]);

    return (
        <Paper
            elevation={0}
            sx={{
                bgcolor: "#181a1b",
                borderRadius: 2,
                border: "1px solid #3b4043",
                p: 3,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: "#d48a67",
                    fontWeight: "bold",
                    mb: 3,
                }}
            >
                Related Products
            </Typography>

            {/* Scroll Container */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    scrollSnapType: "x mandatory",
                    pb: 1,
                    "&::-webkit-scrollbar": {
                        height: 6,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#3b4043",
                        borderRadius: 10,
                    },

                }}
            >
                {randomProducts.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            minWidth: 250,
                            flexShrink: 0,
                            scrollSnapAlign: { md: "start", lg: "none" },
                        }}
                    >
                        <ProductCard
                            id={product.id}
                            image={product.image}
                            category={product.category}
                            location={product.province}
                            title={product.title}
                            rating={product.rating}
                            reviews={product.reviews}
                            price={product.price}
                            onClick={() => navigate(`/product/${product.id}`)}
                            onAddToCart={() => addToCart(product.id)}
                        />
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}

export default RelateProduct;