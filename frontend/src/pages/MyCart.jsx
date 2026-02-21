import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    Paper,
    Button,
    Divider,
    Grid,
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useCartStore } from '../middlewares/cartStore';
import { PRODUCTS } from '../components/product';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer';
import CartItemRow from '../components/cart/CartItemRow';
import BenefitItem from '../components/cart/BenefitItem';

function MyCart() {
    const navigate = useNavigate();
    const { items, removeFromCart, updateQuantity } = useCartStore();

    // Enrich cart items with product details
    const cartItems = useMemo(() => {
        return items
            .map((cartItem) => {
                const product = PRODUCTS.find((p) => p.id === cartItem.id);
                if (!product) return null;
                return {
                    ...cartItem,
                    ...product,
                };
            })
            .filter(Boolean);
    }, [items]);

    const totalPrice = useMemo(() => {
        return cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    }, [cartItems]);

    const handleQuantityChange = (id, delta) => {
        const item = cartItems.find((i) => i.id === id);
        if (!item) return;
        const newQuantity = item.quantity + delta;
        if (newQuantity < 1) {
            removeFromCart(id);
        } else {
            updateQuantity(id, newQuantity);
        }
    };

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleCheckout = () => {
        alert('Checkout functionality coming soon!');
    };

    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: '#181A1B', minHeight: '100vh', py: 4 }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        mb: 4,
                        textAlign: 'center',
                    }}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#d48a67',
                                fontWeight: 700,
                                mb: 0.5,
                                fontSize: '2rem',
                            }}
                        >
                            Shopping Cart
                        </Typography>
                        <Typography sx={{ color: '#b1aaa0', fontSize: '1rem' }}>
                            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                        </Typography>
                    </Box>

                    {cartItems.length === 0 ? (
                        <Paper
                            sx={{
                                bgcolor: '#1e2021',
                                color: '#e8e6e3',
                                p: 6,
                                textAlign: 'center',
                                borderRadius: 2,
                                border: '1px solid #3b4043',
                            }}
                        >
                            <ShoppingBagOutlinedIcon sx={{ fontSize: 80, color: '#bdb7ae', mb: 2 }} />
                            <Typography variant="h5" gutterBottom sx={{ color: '#e8e6e3', fontWeight: 'bold' }}>
                                Your cart is empty
                            </Typography>
                            <Typography variant="body1" color="#bdb7ae" sx={{ mb: 4 }}>
                                Looks like you haven't added anything yet.
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => navigate('/allproduct')}
                                sx={{
                                    bgcolor: '#804224',
                                    color: '#e8e6e3',
                                    py: 1.5,
                                    px: 3,
                                    borderRadius: 1,
                                    fontWeight: 'bold',
                                    '&:hover': { bgcolor: '#974D2A' },
                                }}
                            >
                                Continue Shopping
                            </Button>
                        </Paper>
                    ) : (
                        <Grid
                            container
                            spacing={3}
                            justifyContent="center"
                        >
                            {/* Cart Items Section */}
                            <Grid item xs={12} md={8}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                <Paper
                                    sx={{
                                        bgcolor: '#181a1b',
                                        color: '#e8e6e3',
                                        p: 3,
                                        borderRadius: 2,
                                        border: '1px solid #3b4043',
                                    }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 3,
                                    }}>
                                        {cartItems.map((item, idx) => (
                                            <Box key={item.id}>
                                                {idx > 0 && <Divider sx={{ borderColor: '#3b4043', mb: 2 }} />}
                                                <CartItemRow item={item} onQuantityChange={handleQuantityChange} onRemove={handleRemove} />
                                            </Box>
                                        ))}
                                    </Box>

                                    <Box sx={{ mt: 3, pt: 2 }}>
                                        <Button
                                            startIcon={<ChevronLeftIcon />}
                                            onClick={() => navigate('/allproduct')}
                                            sx={{
                                                color: '#d48a67',
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 'bold',
                                                '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
                                            }}
                                        >
                                            Continue Shopping
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>

                            {/* Order Summary Section */}
                            <Grid item xs={12} md={4}>
                                <Paper
                                    sx={{
                                        bgcolor: '#181a1b',
                                        color: '#e8e6e3',
                                        p: 3,
                                        borderRadius: 2,
                                        border: '1px solid #3b4043',
                                        position: 'sticky',
                                        top: 100,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 2,
                                            color: '#cdc8c2',
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        Order Summary
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography sx={{ color: '#bdb7ae' }}>
                                                Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                                            </Typography>
                                            <Typography sx={{ color: '#bdb7ae' }}>
                                                ฿{totalPrice.toLocaleString()}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography sx={{ color: '#bdb7ae' }}>Shipping</Typography>
                                            <Typography
                                                sx={{
                                                    color: '#57fe95',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                FREE
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Divider sx={{ borderColor: '#3b4043', my: 2 }} />

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                        <Typography
                                            sx={{
                                                fontWeight: 'bold',
                                                color: '#cdc8c2',
                                                fontSize: '1.1rem',
                                            }}
                                        >
                                            Total
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontWeight: 'bold',
                                                color: '#d48a67',
                                                fontSize: '1.3rem',
                                            }}
                                        >
                                            ฿{totalPrice.toLocaleString()}
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        onClick={handleCheckout}
                                        sx={{
                                            bgcolor: '#804224',
                                            color: '#e8e6e3',
                                            py: 1.8,
                                            borderRadius: 1,
                                            fontWeight: 'bold',
                                            fontSize: '1rem',
                                            mb: 1.5,
                                            '&:hover': { bgcolor: '#974D2A' },
                                        }}
                                    >
                                        Proceed to Checkout
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        onClick={() => navigate('/allproduct')}
                                        sx={{
                                            borderColor: '#3b4043',
                                            color: '#bdb7ae',
                                            py: 1.5,
                                            borderRadius: 1,
                                            fontWeight: 'bold',
                                            '&:hover': { borderColor: '#d48a67', bgcolor: '#3b4043' },
                                        }}
                                    >
                                        Continue Shopping
                                    </Button>

                                    {/* Benefits */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3, pt: 2 }}>
                                        <BenefitItem text="Free returns within 30 days" />
                                        <BenefitItem text="Secure checkout" />
                                        <BenefitItem text="Authentic handcrafted products" />
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    )}
                </Container>
            </Box>
            <Footer />
        </>
    );
}

export default MyCart;