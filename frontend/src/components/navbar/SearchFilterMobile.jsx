import Box from '@mui/material/Box';

import NavbarSearch from './NavbarSearch';
import NavbarDropdown from './NavbarDopdown';

function NavbarSearchMobile({
    province,
    onProvinceChange,
    searchTerm,
    onSearchChange
}) {

    return (
        <Box
            sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
                gap: 2,
                p: 2,
                borderTop: '1px solid #3b4043',
                backgroundColor: '#181a1b',
            }}
        >
            <NavbarDropdown
                province={province}
                handleProvinceChange={onProvinceChange}
            />
            <NavbarSearch
                searchTerm={searchTerm}
                handleSearchChange={onSearchChange}
            />

        </Box>
    );
}

export default NavbarSearchMobile;