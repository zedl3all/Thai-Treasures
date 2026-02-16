import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

import { useState } from "react";

import { PROVINCES } from '../../provinces';
import { flex } from '@mui/system';


function FilterBar() {
    const [active, setActive] = useState(null);


    return (
        <Box
            sx={{
                backgroundColor: '#181A1B',
                height: '150px',
            }}>

            <Container
                sx={{
                    py: '24px',
                    px: '160px'
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        mb: '16px',
                        color: '#D48A67'
                    }}>
                    <LocationOnIcon />
                    <Typography>
                        Shop by Province
                    </Typography>
                </Box>
                <Box
                    sx={{
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        scrollBehavior: "smooth",
                        pb: 2,

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
                    <Stack direction="row" spacing={2}>

                        {PROVINCES.map((p) => (
                            <Button
                                key={p.value}
                                variant={active === p.value ? "contained" : "outlined"}
                                onClick={() => setActive(p.value)}
                                sx={{
                                    borderColor: active === p.value ? '#974D2A' : '#3B4043',
                                    color: active === p.value ? '#E8E6E3' : '#BDB7AE',
                                    backgroundColor: active === p.value ? '#804224' : '#181A1B',
                                    backgroundOpacity: '0.1',
                                    borderRadius: '10px',
                                    px: '25px',
                                    py: '15px',
                                    whiteSpace: "nowrap",
                                    minWidth: 'fit-content',
                                    flexShrink: 0
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