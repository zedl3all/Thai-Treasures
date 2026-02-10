import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

function NavbarSearchDesktop({
    searchTerm,
    handleSearchChange
}) {
    return (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '44px',
            backgroundColor: '#181a1b',
            border: '1px solid #3b4043',
            borderRadius: '8px',
            paddingLeft: '12px',
            paddingRight: '12px',
        }}
    >
        <SearchIcon
            sx={{
                color: '#b1aaa0',
                marginRight: '8px',
                fontSize: { md: '18px', lg: '20px' },
            }}
        />
        <InputBase
            placeholder="Search for souvenirs..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
                flex: 1,
                color: '#b2aba1',
                fontFamily: 'Arimo, sans-serif',
                fontSize: { md: '13px', lg: '14px' },
                '& ::placeholder': {
                    color: '#b2aba1',
                    opacity: 1,
                },
            }}
        />
    </Box>);
}
export default NavbarSearchDesktop;