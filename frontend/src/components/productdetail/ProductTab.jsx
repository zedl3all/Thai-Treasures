import { Box, Grid, Paper, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react';

function SpecItem({ label, value }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                pb: 1.5,
                borderBottom: "1px solid #2c2f31",
            }}
        >
            <Typography
                sx={{
                    fontSize: "0.75rem",
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    color: "#8c857c",
                }}
            >
                {label}
            </Typography>

            <Typography
                sx={{
                    fontSize: "0.95rem",
                    color: "#cdc8c2",
                    fontWeight: 500,
                }}
            >
                {value}
            </Typography>
        </Box>
    );
}

function ProductTab({ product }) {
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Paper
            elevation={0}
            sx={{
                bgcolor: '#181a1b',
                borderRadius: 2,
                border: '1px solid #3b4043',
                overflow: 'hidden',
                mb: 3,
            }}
        >
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                sx={{
                    bgcolor: '#17221e',
                    borderBottom: '1px solid #3b4043',
                    '& .MuiTab-root': {
                        color: '#b1aaa0',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        '&.Mui-selected': {
                            color: '#d48a67',
                        },
                    },
                    '& .MuiTabs-indicator': {
                        bgcolor: '#d48a67',
                        display: 'none',
                    },
                }}
            >
                <Tab label="Description" />
                <Tab label="Cultural Story" />
                <Tab label="Reviews" />
            </Tabs>

            <Box sx={{ p: 3 }}>
                {tabValue === 0 && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {/* Description */}
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#cdc8c2',
                                    fontWeight: 'bold',
                                    mb: 1.5,
                                }}
                            >
                                Product Description
                            </Typography>
                            <Typography sx={{ color: '#bdb7ae', lineHeight: 1.7 }}>
                                This authentic {product.category.toLowerCase()} from {product.province} is
                                carefully handcrafted by local artisans using traditional techniques. Each piece
                                reflects the rich cultural heritage of Thailand and is made with attention to detail.
                                Perfect as a souvenir or gift for someone special.
                            </Typography>
                        </Box>

                        {/* Specifications */}
                        <Box
                            sx={{
                                mt: 3,
                                p: { xs: 2, md: 3 },
                                borderRadius: 2,
                                bgcolor: "#181a1b",
                                border: "1px solid #2c2f31",
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: 2.5,
                                    fontWeight: "bold",
                                    fontSize: "1.1rem",
                                    color: "#d48a67",
                                }}
                            >
                                Product Specifications
                            </Typography>

                            <Grid
                                container
                                rowSpacing={2}
                                columnSpacing={{ xs: 2, md: 4 }}
                            >
                                <Grid item xs={12} sm={6}>
                                    <SpecItem label="Material" value={product.material} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <SpecItem label="Dimensions" value={product.dimensions} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <SpecItem label="Weight" value={product.weight} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <SpecItem label="Care Instructions" value={product.careInstructions} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <SpecItem label="Origin" value={product.origin} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <SpecItem label="Artisan" value={product.artisan} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                )}

                {tabValue === 1 && (
                    <Typography sx={{ color: '#bdb7ae', lineHeight: 1.7 }}>
                        Explore the rich cultural heritage behind this beautiful {product.category.toLowerCase()}.
                        This product is a symbol of {product.province}'s artistic traditions and craftsmanship.
                    </Typography>
                )}

                {tabValue === 2 && (
                    <Typography sx={{ color: '#bdb7ae', lineHeight: 1.7 }}>
                        Customer reviews coming soon! Be among the first to share your experience with this product.
                    </Typography>
                )}
            </Box>
        </Paper>
    )
}

export default ProductTab;