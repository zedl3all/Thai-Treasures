import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { useNavigate } from 'react-router-dom'

import NavbarDropdown from './NavbarDopdown';

function NavbarDrawer({
    open,
    onClose,
    badgeCount,
    province,
    onProvinceChange,
}) {
    const navigate = useNavigate()


    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={onClose}
            ModalProps={{ keepMounted: true }}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                    width: 250,
                    backgroundColor: '#181a1b',
                    color: '#e8e6e3',
                },
            }}
        >
            <Box sx={{ p: 2 }}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            border: '1px solid #3b4043',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography fontWeight="bold">TT</Typography>
                    </Box>
                    <Typography fontWeight="bold" color="#d48a67">
                        Thai Treasures
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ borderColor: '#3b4043' }} />

            {/* Menu */}
            <List>
                <ListItem button onClick={() => {
                    navigate('/');
                    onClose();
                }}>
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button onClick={() => {
                    navigate('/products');
                    onClose();
                }}>
                    <ListItemText primary="All Products" />
                </ListItem>

                <ListItem button onClick={() => {
                    navigate('/mycart');
                    onClose();
                }}>
                    <ListItemText
                        primary="Cart"
                        secondary={`(${badgeCount} items)`}
                        secondaryTypographyProps={{
                            color: '#b1aaa0',
                            fontSize: '0.75rem',
                        }}
                    />
                </ListItem>
            </List>

            <Divider sx={{ borderColor: '#3b4043' }} />

            {/* Province Filter */}
            <Box sx={{ p: 2 }}>
                <Typography sx={{ mb: 1, color: '#b1aaa0' }}>
                    Filter by Province
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <NavbarDropdown
                        province={province}
                        handleProvinceChange={onProvinceChange}
                    />
                </Box>
            </Box>
        </Drawer>
    )
}

export default NavbarDrawer