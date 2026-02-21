import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// ฟังก์ชันช่วยในการแสดงอิโมจิประจำจังหวัด
const getEmoji = (province) => {
    const emojis = {
        'Bangkok': '🏛️',
        'ChiangMai': '🏔️',
        'Phuket': '🏖️',
        'Ayutthaya': '🏯',
        'Sukhothai': '⛩️',
        'Lopburi': '🐵',
        'Chonburi': '🌊',
    };
    return emojis[province] || '📍';
};

function CartItemRow({ item, onQuantityChange, onRemove }) {
    return (
        <Grid container spacing={2}>
            {/* Product Image */}
            <Grid item xs={3} sm={2}>
                <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    onClick={() => window.location.href = `/product/${item.id}`}
                    sx={{
                        width: '100px',
                        borderRadius: 1,
                        aspectRatio: '1/1',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        bgcolor: '#1a2326',
                        '&:hover': { opacity: 0.8 },
                    }}
                />
            </Grid>

            {/* Product Details */}
            <Grid item xs={9} sm={7}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: '#cdc8c2',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            '&:hover': { color: '#d48a67' },
                        }}
                        onClick={() => window.location.href = `/product/${item.id}`}
                    >
                        {item.title}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography sx={{ fontSize: '1.3rem' }}>{getEmoji(item.province)}</Typography>
                        <Typography sx={{ color: '#b1aaa0', fontSize: '0.85rem' }}>
                            {item.province}
                        </Typography>
                    </Box>

                    <Typography sx={{ color: '#b1aaa0', fontSize: '0.85rem' }}>
                        Price: <span style={{ color: '#cdc8c2', fontWeight: 'bold' }}>฿{item.price.toLocaleString()}</span>
                    </Typography>

                    {/* Quantity Controls */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                        <Typography sx={{ color: '#b1aaa0', fontSize: '0.85rem' }}>Qty:</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                border: '2px solid #3b4043',
                                borderRadius: 1,
                                overflow: 'hidden',
                            }}
                        >
                            <IconButton
                                size="small"
                                onClick={() => onQuantityChange(item.id, -1)}
                                sx={{
                                    width: 32,
                                    height: 32,
                                    color: '#b1aaa0',
                                    '&:hover': { bgcolor: '#3b4043' },
                                }}
                            >
                                <RemoveIcon fontSize="small" />
                            </IconButton>
                            <Box
                                sx={{
                                    width: 40,
                                    height: 32,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderLeft: '1px solid #3b4043',
                                    borderRight: '1px solid #3b4043',
                                    fontSize: '0.95rem',
                                    color: '#e2dfdb',
                                    fontWeight: 'bold',
                                }}
                            >
                                {item.quantity}
                            </Box>
                            <IconButton
                                size="small"
                                onClick={() => onQuantityChange(item.id, 1)}
                                sx={{
                                    width: 32,
                                    height: 32,
                                    color: '#b1aaa0',
                                    '&:hover': { bgcolor: '#3b4043' },
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        <Button
                            onClick={() => onRemove(item.id)}
                            startIcon={<DeleteOutlineIcon />}
                            sx={{
                                color: '#ff2a34',
                                textTransform: 'none',
                                fontSize: '0.85rem',
                                fontWeight: 'bold',
                                ml: 1,
                                '&:hover': { bgcolor: 'rgba(255, 42, 52, 0.1)' },
                            }}
                        >
                            Remove
                        </Button>
                    </Box>
                </Box>
            </Grid>

            {/* Total Price */}
            <Grid item xs={12} sm={3} sx={{ textAlign: 'right' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Typography
                        sx={{
                            color: '#d48a67',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}
                    >
                        ฿{(item.price * item.quantity).toLocaleString()}
                    </Typography>
                    <Typography sx={{ color: '#9d9588', fontSize: '0.75rem' }}>
                        ฿{item.price.toLocaleString()} × {item.quantity}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CartItemRow;