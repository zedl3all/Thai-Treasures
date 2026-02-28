import {
    Card,
    CardMedia,
    CardContent,
    Box,
    Typography,
    Chip,
    IconButton,
    Snackbar,
    Slide,
    Portal,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../middlewares/cartStore';
import { useState } from 'react';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
}

export default function ProductCard({
    id,
    image,
    category = 'None',
    location = 'None',
    title = 'None',
    rating = 0,
    reviews = 0,
    price = 0,
    cardwidth = 320
}) {
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);
    const [toastOpen, setToastOpen] = useState(false);

    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(id);
        setToastOpen(true);
    };

    const handleToastClose = (_, reason) => {
        if (reason === 'clickaway') return;
        setToastOpen(false);
    };

    return (
        <>
            <Card
                onClick={handleCardClick}
                sx={{
                    width: cardwidth,
                    borderRadius: 4,
                    overflow: 'hidden',
                    bgcolor: '#111',
                    color: '#fff',
                    position: 'relative',
                    boxShadow: '0 4px 24px 0 rgba(255,138,101,0.08)',
                    border: '1.5px solid #232323',
                    transition: 'box-shadow 0.2s, border 0.2s, transform 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: '0 8px 32px 0 rgba(255,138,101,0.18)',
                        border: '1.5px solid #FF8A65',
                        transform: 'translateY(-4px)',
                    },
                }}
            >
                {/* Image Section */}
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{
                            objectFit: 'cover',
                            width: '100%',
                            height: { xs: 180, sm: 220, md: 260, lg: 325 },
                            transition: 'filter 0.2s',
                            filter: 'brightness(0.97)',
                        }}
                    />
                    <Chip
                        label={category}
                        sx={{
                            position: 'absolute',
                            top: { xs: 10, sm: 16 },
                            right: { xs: 10, sm: 16 },
                            bgcolor: '#8D6E1E',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: { xs: 11, sm: 13 },
                            px: { xs: 1, sm: 2 },
                            boxShadow: '0 2px 8px 0 rgba(141,110,30,0.13)',
                        }}
                    />
                    <Chip
                        icon={<LocationOnIcon sx={{ fontSize: 18 }} />}
                        label={location}
                        sx={{
                            position: 'absolute',
                            bottom: { xs: 10, sm: 16 },
                            left: { xs: 10, sm: 16 },
                            bgcolor: 'rgba(0,0,0,0.7)',
                            color: '#FFAB91',
                            fontSize: { xs: 11, sm: 13 },
                            px: { xs: 1, sm: 2 },
                            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)',
                        }}
                    />
                </Box>

                {/* Content */}
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        gutterBottom
                        sx={{ fontSize: { xs: 16, sm: 18 } }}
                    >
                        {title}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <StarIcon sx={{ color: '#FFD54F', fontSize: 20, mr: 0.5 }} />
                        <Typography variant="body1" sx={{ mr: 1, fontSize: { xs: 14, sm: 16 } }}>
                            {rating}
                        </Typography>
                        <Typography variant="body2" color="gray" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                            • {reviews} reviews
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            sx={{ color: '#FF8A65', fontWeight: 700, fontSize: { xs: 18, sm: 22 } }}
                        >
                            ฿{price.toLocaleString()}
                        </Typography>

                        <IconButton
                            onClick={handleAddToCart}
                            sx={{
                                bgcolor: '#A0522D',
                                borderRadius: '10px',
                                color: '#fff',
                                '&:hover': { bgcolor: '#8B4513' },
                                boxShadow: '0 2px 8px 0 rgba(160,82,45,0.13)',
                            }}
                        >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>

            {/* ── Cart Toast (Portal เพื่อหนี stacking context ของ Card) ── */}
            <Portal>
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
                    <Box
                        component="img"
                        src={image}
                        alt={title}
                        sx={{
                            width: 52,
                            height: 52,
                            borderRadius: 1.5,
                            objectFit: 'cover',
                            flexShrink: 0,
                            border: '1px solid #3b4043',
                        }}
                    />
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
                            {title}
                        </Typography>
                        <Typography sx={{ color: '#9d9588', fontSize: 12, mt: 0.2 }}>
                            ฿{price.toLocaleString()}
                        </Typography>
                    </Box>
                </Box>
            </Snackbar>
            </Portal>
        </>
    );
}