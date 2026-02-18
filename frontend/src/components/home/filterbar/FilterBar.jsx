import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

import { useState } from "react";

import { PROVINCES } from '../../provinces';

function FilterBar() {
    const [active, setActive] = useState(null);

    return (
        <Box
            sx={{
                backgroundColor: '#181A1B',
                height: { xs: 'auto', sm: '120px', md: '150px' },
                minHeight: { xs: '100px', sm: '120px', md: '150px' },
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
            }}>
            <Container
                maxWidth={false}
                sx={{
                    py: { xs: 2, sm: 3 },
                    px: { xs: 1, sm: 3, md: 8, lg: 16 },
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: { xs: 1, sm: 2 },
                        color: '#D48A67',
                        gap: 1,
                    }}>
                    <LocationOnIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: { xs: 16, sm: 18, md: 20 },
                        letterSpacing: 0.5,
                    }}>
                        Shop by Province
                    </Typography>
                </Box>
                <Box
                    sx={{
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        scrollBehavior: "smooth",
                        pb: 1,

                        /* Firefox */
                        scrollbarWidth: "thin",
                        scrollbarColor: "#804224 #181A1B",

                        /* Chrome, Edge, Safari */
                        "&::-webkit-scrollbar": {
                            height: "8px",
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#181A1B",
                            borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#804224",
                            borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#974D2A",
                        },
                    }}
                >
                    <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
                        {PROVINCES.map((p) => (
                            <Button
                                key={p.value}
                                variant={active === p.value ? "contained" : "outlined"}
                                onClick={() => setActive(p.value)}
                                sx={{
                                    borderColor: active === p.value ? '#974D2A' : '#3B4043',
                                    color: active === p.value ? '#E8E6E3' : '#BDB7AE',
                                    backgroundColor: active === p.value ? '#804224' : '#181A1B',
                                    borderRadius: '10px',
                                    px: { xs: 2, sm: 3 },
                                    py: { xs: 1, sm: 1.5 },
                                    fontSize: { xs: 13, sm: 15 },
                                    fontWeight: 600,
                                    whiteSpace: "nowrap",
                                    minWidth: 'fit-content',
                                    boxShadow: active === p.value ? '0 2px 8px 0 rgba(128,66,36,0.12)' : 'none',
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        backgroundColor: active === p.value ? '#974D2A' : '#262626',
                                        borderColor: '#974D2A',
                                        color: '#fff',
                                    }
                                }}
                            >
                                {p.label}
                            </Button>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default FilterBar;