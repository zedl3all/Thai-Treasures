import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useCartStore } from '../../middlewares/cartStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Components
import NavbarDrawer from './NavbarDrawer';
import SearchFilterDesktop from './SearchFilterDesktop';
import SearchFilterMobile from './SearchFilterMobile';

function Navbar() {
    const navigate = useNavigate();
    const badgeCount = useCartStore((state) => state.cartCount);
    const [province, setProvince] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    const handleProvinceChange = (event) => {
        const selectedProvince = event.target.value;

        setProvince(selectedProvince);

        if (selectedProvince.trim()) {
            navigate(`/allproduct?province=${encodeURIComponent(selectedProvince)}`);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const query = searchTerm.trim();
        if (query) {
            navigate(`/allproduct?search=${encodeURIComponent(query)}`);
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#181a1b',
                    boxShadow: 'none',
                    borderBottom: '1px solid #3b4043',
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 1, sm: 2, md: 3, lg: 4 },
                        px: { xs: 1, sm: 2, md: 4, lg: 6 },
                        py: 1,
                        minHeight: { xs: '56px', sm: '64px' },
                    }}
                >
                    {/* Mobile Menu Button */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            color: '#e8e6e3'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Logo Section */}
                    <Box
                        onClick={() => navigate('/')}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: '8px', sm: '12px' },
                            height: { xs: '40px', sm: '48px' },
                            flex: { xs: '1', md: '0 0 auto' },
                            cursor: 'pointer',
                            minWidth: 0,
                            maxWidth: { xs: 'calc(100% - 100px)', sm: 'auto' }
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: { xs: '40px', sm: '48px' },
                                height: { xs: '40px', sm: '48px' },
                                backgroundColor: 'transparent',
                                border: '1px solid #3b4043',
                                borderRadius: '10px',
                                flexShrink: 0,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#e8e6e3',
                                    fontFamily: 'Arimo, sans-serif',
                                    fontSize: { xs: '16px', sm: '20px' },
                                }}
                            >
                                TT
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                flexDirection: 'column',
                                justifyContent: 'center',
                                minWidth: 0,
                            }}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#d48a67',
                                    fontFamily: 'Arimo, sans-serif',
                                    fontSize: { sm: '16px', md: '18px', lg: '20px' },
                                    lineHeight: 1.2,
                                }}
                            >
                                Thai Treasures
                            </Typography>
                            <Typography
                                variant="caption"
                                noWrap
                                sx={{
                                    color: '#b1aaa0',
                                    fontFamily: 'Arimo, sans-serif',
                                    fontSize: { sm: '11px', md: '12px' },
                                    lineHeight: 1.2,
                                }}
                            >
                                Authentic Provincial Souvenirs
                            </Typography>
                        </Box>
                    </Box>

                    {/* Search and Filter Section - Desktop */}
                    <SearchFilterDesktop
                        province={province}
                        handleProvinceChange={handleProvinceChange}
                        searchTerm={searchTerm}
                        handleSearchChange={handleSearchChange}
                        handleSearchSubmit={handleSearchSubmit}
                    />

                    {/* Mobile Search Button */}
                    <IconButton
                        color="inherit"
                        onClick={() => setShowMobileSearch(!showMobileSearch)}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            color: '#e8e6e3',
                            mr: 1
                        }}
                    >
                        <SearchIcon />
                    </IconButton>

                    {/* Cart Icon */}
                    <Box
                        onClick={() => navigate('/mycart')}
                        sx={{
                            position: 'relative',
                            flexShrink: 0,
                            cursor: 'pointer',
                        }}
                    >
                        <Badge
                            badgeContent={badgeCount}
                            max={99}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: '#79631a',
                                    color: '#e8e6e3',
                                    fontSize: '10px',
                                    fontFamily: 'Arimo, sans-serif',
                                    minWidth: '16px',
                                    height: '16px',
                                },
                            }}
                        >
                            <ShoppingCartOutlinedIcon
                                sx={{
                                    color: '#d48a67',
                                    fontSize: { xs: '28px', sm: '32px' },
                                }}
                            />
                        </Badge>
                    </Box>
                </Toolbar>

                {/* Mobile Search Bar & Filter Section */}
                {showMobileSearch && (
                    <SearchFilterMobile
                        province={province}
                        onProvinceChange={handleProvinceChange}
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                        handleSearchSubmit={handleSearchSubmit}
                    />
                )}
            </AppBar>

            {/* Mobile Drawer */}
            <NavbarDrawer
                open={mobileOpen}
                onClose={handleDrawerToggle}
                badgeCount={badgeCount}
                province={province}
                onProvinceChange={handleProvinceChange}
            />
        </>
    );
}

export default Navbar;