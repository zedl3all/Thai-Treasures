import Box from '@mui/material/Box';

// component imports
import NavbarDropdown from './NavbarDopdown';
import NavbarSearch from './NavbarSearch';

function SearchFilterDesktop({
    province,
    handleProvinceChange,
    searchTerm,
    handleSearchChange
}) {
    return (
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                gap: { md: '12px', lg: '16px' },
                alignItems: 'center',
                height: '44px',
                flex: { md: '1', lg: '0 1 600px' },
                minWidth: 0,
                maxWidth: { md: '500px', lg: '600px' }
            }}
        >
            {/* Province Dropdown */}
            <NavbarDropdown
                province={province}
                handleProvinceChange={handleProvinceChange}
            />

            {/* Search Input */}
            <NavbarSearch
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
            />
        </Box>
    );
}
export default SearchFilterDesktop;