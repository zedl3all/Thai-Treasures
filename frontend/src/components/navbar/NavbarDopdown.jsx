import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { PROVINCES } from '../provinces'

function NavbarDropdown({
    province,
    handleProvinceChange
}) {

    const menuItemSx = {
        '&:hover': {
            backgroundColor: '#2c2f30'
        },
        '&.Mui-selected': {
            backgroundColor: '#3b4043'
        },
        '&.Mui-selected:hover': {
            backgroundColor: '#434749'
        }
    };

    return (
        <FormControl
            sx={{
                width: { md: '140px', lg: '210px' },
                height: '44px',
                '& .MuiOutlinedInput-root': {
                    backgroundColor: '#181a1b',
                    color: 'white',
                    border: '1px solid #434343',
                    borderRadius: '8px',
                    height: '44px',
                    paddingLeft: '8px',
                    fontFamily: 'Arimo, sans-serif',
                    fontSize: { md: '13px', lg: '14px' },
                    '&:hover fieldset': {
                        borderColor: '#434343',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#d48a67',
                    },
                },
                '& .MuiSvgIcon-root': {
                    color: '#b1aaa0',
                }
            }}
        >
            <Select
                value={province}
                onChange={handleProvinceChange}
                displayEmpty
                startAdornment={
                    <LocationOnIcon
                        sx={{
                            marginRight: '6px',
                            color: '#b1aaa0',
                            fontSize: { md: '16px', lg: '18px' }
                        }}
                    />
                }
                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: '#181a1b',
                            color: 'white',
                            borderRadius: '8px',
                            border: '1px solid #434343',
                        }
                    }
                }}
            >
                {PROVINCES.map((p) => (
                    <MenuItem
                        key={p.value}
                        value={p.value}
                        sx={menuItemSx}
                    >
                        {p.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default NavbarDropdown;