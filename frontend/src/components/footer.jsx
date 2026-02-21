import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    const colors = {
        bgBrown: '#804224',
        accentGold: '#d8b649',
        textLight: '#e8e6e3',
        textLight80: 'rgba(232, 230, 227, 0.8)',
        textLight60: 'rgba(232, 230, 227, 0.6)',
    };

    const footerLinkSx = {
        color: colors.textLight,
        textDecoration: 'none',
        fontSize: '16px',
        fontFamily: "'Arimo', sans-serif",
        lineHeight: '24px',
        transition: 'color 0.3s ease',
        '&:hover': {
            color: colors.accentGold,
        },
    };

    const socialLinkSx = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        color: colors.textLight,
        transition: 'color 0.3s ease',
        textDecoration: 'none',
        '&:hover': {
            color: colors.accentGold,
        },
        '& svg': {
            width: '100%',
            height: '100%',
        },
    };

    const contactIconSx = {
        width: 20,
        height: 20,
        color: colors.textLight,
        flexShrink: 0,
        mt: 0.25,
    };

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: colors.bgBrown,
                py: 5,
                px: 3,
            }}
        >
            <Container maxWidth="xl" disableGutters>
                {/* Main grid */}
                <Grid
                    container
                    sx={{
                        justifyContent: {
                            xs: "center",
                            lg: "space-between",
                        },
                        rowGap: { sm: 6 },
                        mb: 6
                    }}
                >
                    {/* Column 1 */}
                    <Grid item xs={12} sm={6} lg={3}
                        sx={{
                            textAlign: { xs: "center", sm: "left" },
                            pb: { xs: 4, sm: 0 },
                            pr: { sm: 4 }
                        }}>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: colors.accentGold,
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: { xs: 18, md: 20 },
                                }}
                            >
                                Thai Treasures
                            </Typography>

                            <Typography
                                sx={{
                                    color: colors.textLight80,
                                    mb: 3,
                                    fontSize: 15,
                                    lineHeight: 1.6,
                                }}
                            >
                                Discover authentic handcrafted souvenirs from every province of Thailand.<br />
                                Supporting local artisans and preserving traditional craftsmanship.
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    justifyContent: { xs: "center", sm: "left" }
                                }}>
                                <Link href="#" sx={socialLinkSx}>
                                    <FacebookIcon />
                                </Link>
                                <Link href="#" sx={socialLinkSx}>
                                    <InstagramIcon />
                                </Link>
                                <Link href="#" sx={socialLinkSx}>
                                    <XIcon />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Column 2 */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        sx={{
                            display: { xs: "none", md: "block" },
                            pr: { md: 4 }
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: colors.accentGold,
                                fontWeight: 700,
                                mb: 2,
                                fontSize: { xs: 18, md: 20 },
                            }}
                        >
                            Quick Links
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                            <Link href="#" sx={footerLinkSx}>About Us</Link>
                            <Link href="#" sx={footerLinkSx}>All Provinces</Link>
                            <Link href="#" sx={footerLinkSx}>Products</Link>
                            <Link href="#" sx={footerLinkSx}>Our Craftsmanship</Link>
                            <Link href="#" sx={footerLinkSx}>Featured Collections</Link>
                        </Box>
                    </Grid>

                    {/* Column 3 */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        sx={{
                            display: { xs: "none", md: "block" },
                            pr: { md: 4 }
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: colors.accentGold,
                                fontWeight: 700,
                                mb: 2,
                                fontSize: { xs: 18, md: 20 },
                            }}
                        >
                            Categories
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                            <Link href="#" sx={footerLinkSx}>Textiles & Silk</Link>
                            <Link href="#" sx={footerLinkSx}>Ceramics & Pottery</Link>
                            <Link href="#" sx={footerLinkSx}>Wood Crafts</Link>
                            <Link href="#" sx={footerLinkSx}>Jewelry</Link>
                            <Link href="#" sx={footerLinkSx}>Handicrafts</Link>
                        </Box>
                    </Grid>

                    {/* Column 4 */}
                    <Grid item xs={12} sm={6} lg={3}
                        sx={{
                            textAlign: { xs: "center", sm: "left" }
                        }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: colors.accentGold,
                                fontWeight: 700,
                                mb: 2,
                                fontSize: { xs: 18, md: 20 },
                            }}
                        >
                            Contact Us
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Box sx={{ display: "flex", gap: 1.5 }}>
                                <LocationOnIcon sx={contactIconSx} />
                                <Typography sx={{ color: colors.textLight80 }}>
                                    123 Thai Street, Bangkok, Thailand
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", gap: 1.5 }}>
                                <PhoneIcon sx={contactIconSx} />
                                <Typography sx={{ color: colors.textLight80 }}>
                                    +66 123 123 1212
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", gap: 1.5 }}>
                                <EmailIcon sx={contactIconSx} />
                                <Typography sx={{ color: colors.textLight80 }}>
                                    info@thaitreasures.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright section */}
                <Box
                    sx={{
                        textAlign: 'center',
                        pt: 4,
                        borderTop: '1px solid rgba(232, 230, 227, 0.1)',
                    }}
                >
                    <Typography
                        sx={{
                            color: colors.textLight60,
                            fontSize: {
                                xs: '14px',
                                md: '16px',
                            },
                            lineHeight: '24px',
                            fontFamily: "'Arimo', sans-serif",
                        }}
                    >
                        © 2026 Thai Treasures. All rights reserved. Proudly supporting Thai artisans.
                    </Typography>
                </Box>
            </Container>
        </Box >
    );
}