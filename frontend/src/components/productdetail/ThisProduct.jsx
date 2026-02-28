import {
    Paper,
    Box,
    Grid,
    Typography,
    Chip,
    Button,
    IconButton,
    Rating,
    Snackbar,
    Slide,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { useCartStore } from '../../middlewares/cartStore';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
}

function FeatureItem({ icon, title, desc }) {
    return (
        <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Typography sx={{ fontSize: '1.5rem', minWidth: '24px', textAlign: 'center' }}>
                {icon}
            </Typography>
            <Box>
                <Typography sx={{ color: '#cdc8c2', fontWeight: 'bold', fontSize: '0.95rem' }}>
                    {title}
                </Typography>
                <Typography sx={{ color: '#b1aaa0', fontSize: '0.875rem' }}>{desc}</Typography>
            </Box>
        </Box>
    );
}

function ThisProduct({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [toastOpen, setToastOpen] = useState(false);
    const addToCart = useCartStore((state) => state.addToCart);

    const handleQuantityChange = (delta) => {
        setQuantity(Math.max(1, quantity + delta));
    };

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product.id);
        }
        setQuantity(1);
        setToastOpen(true);
    };

    const handleToastClose = (_, reason) => {
        if (reason === 'clickaway') return;
        setToastOpen(false);
    };

    return (
        <>
            <Paper
                elevation={0}
                sx={{
                    bgcolor: '#1e2021',
                    color: '#e8e6e3',
                    p: { xs: 2, md: 4 },
                    borderRadius: 2,
                    border: '1px solid #3b4043',
                    mb: 3,
                }}
            >
                <Grid
                    container
                    spacing={4}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                >
                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                width: { xs: "100%", sm: 450 },
                                maxWidth: 450,
                                aspectRatio: "1 / 1",
                                borderRadius: 2,
                                overflow: "hidden",
                                bgcolor: "#181a1b",
                            }}
                        >
                            <Box
                                component="img"
                                src={product.image}
                                alt={product.title}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            {/* Category Badge */}
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip
                                    label={product.category}
                                    sx={{
                                        bgcolor: '#79631a',
                                        color: '#e8e6e3',
                                        fontWeight: 'bold',
                                    }}
                                />
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#d48a67',
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                }}
                            >
                                {product.title}
                            </Typography>

                            {/* Origin */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Box>
                                    <Typography sx={{ color: '#9d9588', fontSize: '0.875rem' }}>
                                        Handcrafted in
                                    </Typography>
                                    <Typography sx={{ color: '#cdc8c2', fontWeight: 'bold' }}>
                                        {product.province}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Rating */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Rating
                                    value={product.rating}
                                    precision={0.1}
                                    readOnly
                                    sx={{
                                        '& .MuiRating-iconFilled': { color: '#FFD54F' },
                                        '& .MuiRating-iconEmpty': { color: '#555' },
                                    }}
                                />
                                <Typography sx={{ color: '#b1aaa0', fontSize: '0.875rem' }}>
                                    {product.rating} ({product.reviews} reviews)
                                </Typography>
                            </Box>

                            {/* Price */}
                            <Box>
                                <Typography
                                    sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#d48a67' }}
                                >
                                    ฿{product.price.toLocaleString()}
                                </Typography>
                                <Typography sx={{ color: '#9d9588', fontSize: '0.875rem' }}>
                                    Tax included. Shipping calculated at checkout.
                                </Typography>
                            </Box>

                            {/* Stock Status */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        bgcolor: product.instock > 0 ? '#018632' : '#b71c1c',
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: product.instock > 0 ? '#57fe95' : '#ff6b6b',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {product.instock > 0
                                        ? `In Stock (${product.instock} available)`
                                        : "Out of Stock"}
                                </Typography>
                            </Box>

                            {/* Quantity Selector */}
                            <Box>
                                <Typography
                                    sx={{
                                        color: '#bdb7ae',
                                        fontWeight: 'bold',
                                        mb: 1,
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    Quantity
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <IconButton
                                        onClick={() => handleQuantityChange(-1)}
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            border: '2px solid #3b4043',
                                            borderRadius: 1,
                                            color: '#bdb7ae',
                                            '&:hover': { bgcolor: '#3b4043' },
                                        }}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Box
                                        sx={{
                                            width: 80,
                                            height: 48,
                                            border: '2px solid #3b4043',
                                            borderRadius: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: '#181a1b',
                                        }}
                                    >
                                        <Typography sx={{ color: '#e2dfdb', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                            {quantity}
                                        </Typography>
                                    </Box>
                                    <IconButton
                                        onClick={() => handleQuantityChange(1)}
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            border: '2px solid #3b4043',
                                            borderRadius: 1,
                                            color: '#bdb7ae',
                                            '&:hover': { bgcolor: '#3b4043' },
                                        }}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Action Buttons */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<ShoppingCartOutlinedIcon />}
                                    onClick={handleAddToCart}
                                    disabled={product.instock === 0}
                                    sx={{
                                        bgcolor: '#804224',
                                        color: '#e8e6e3',
                                        py: 1.8,
                                        borderRadius: 1,
                                        textTransform: 'none',
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        '&:hover': { bgcolor: '#974D2A' },
                                        '&.Mui-disabled': { bgcolor: '#3b4043', color: '#6b6560' },
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            </Box>

                            {/* Features */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, pt: 2 }}>
                                <FeatureItem icon="✓" title="Authentic Craftsmanship" desc="100% handmade by local artisans" />
                                <FeatureItem icon="✓" title="Quality Guaranteed" desc="30-day return policy" />
                                <FeatureItem icon="✓" title="Free Shipping" desc="On orders over ฿2,000" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* ── Cart Toast ── */}
            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={handleToastClose}
                TransitionComponent={SlideTransition}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{ top: { xs: 16, sm: 24 } }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        bgcolor: '#1e2021',
                        border: '1px solid #3b4043',
                        borderLeft: '4px solid #FF8A65',
                        borderRadius: 2,
                        px: 2.5,
                        py: 2,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                        minWidth: { xs: 300, sm: 380 },
                        maxWidth: 480,
                    }}
                >
                    {/* Product thumbnail */}
                    <Box
                        component="img"
                        src={product.image}
                        alt={product.title}
                        sx={{
                            width: 52,
                            height: 52,
                            borderRadius: 1.5,
                            objectFit: 'cover',
                            flexShrink: 0,
                            border: '1px solid #3b4043',
                        }}
                    />

                    {/* Text */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.3 }}>
                            <CheckCircleIcon sx={{ color: '#FF8A65', fontSize: 16 }} />
                            <Typography sx={{ color: '#FF8A65', fontSize: 12, fontWeight: 700 }}>
                                เพิ่มลงตะกร้าแล้ว
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                color: '#e8e6e3',
                                fontSize: 14,
                                fontWeight: 600,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {product.title}
                        </Typography>
                        <Typography sx={{ color: '#9d9588', fontSize: 12, mt: 0.2 }}>
                            {quantity === 1
                                ? `฿${product.price.toLocaleString()}`
                                : `${quantity} ชิ้น · ฿${(product.price * quantity).toLocaleString()}`}
                        </Typography>
                    </Box>
                </Box>
            </Snackbar>
        </>
    );
}

export default ThisProduct;