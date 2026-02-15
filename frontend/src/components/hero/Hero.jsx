import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import HeroImage from '../../assets/images/hero-image.jpg';


function Hero() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: { xs: 300, sm: 400, md: 450, lg: 500 },
                backgroundImage: `url(${HeroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}
            />

            {/* Content */}
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: '#fff',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        lineHeight: 1.2,
                        mb: 3,
                        fontSize: { xs: '30px', sm: '36px', md: '48px' },
                        letterSpacing: '-0.5px',
                    }}
                >
                    Discover Thailand's <br />
                    Finest Treasures
                </Typography>

                <Typography
                    sx={{
                        mb: 4,
                        maxWidth: 520,
                        opacity: 0.9,
                        fontSize: { xs: '14px', md: '16px' },
                        lineHeight: 1.7,
                        display: { xs: 'none', sm: 'block' },
                    }}
                >
                    Authentic handcrafted souvenirs from every province, <br />
                    delivered directly to your doorstep.
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        alignItems: { xs: 'stretch', sm: 'center' },
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: ' #c07655',
                            px: 5,
                            py: 1.3,
                            fontWeight: 600,
                            borderRadius: '10px',
                            textTransform: 'none',
                            fontSize: '15px',
                            '&:hover': {
                                backgroundColor: '#d48a67',
                                transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Shop Now
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            px: 5,
                            py: 1.3,
                            fontWeight: 600,
                            borderRadius: '10px',
                            textTransform: 'none',
                            fontSize: '15px',
                            borderColor: '#fff',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderColor: '#fff',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Explore Provinces
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;