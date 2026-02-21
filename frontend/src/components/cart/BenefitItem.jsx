import { Box, Typography } from '@mui/material';

function BenefitItem({ text }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
                sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    bgcolor: '#044624',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}
            >
                <Typography sx={{ color: '#57fe95', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    ✓
                </Typography>
            </Box>
            <Typography sx={{ color: '#b1aaa0', fontSize: '0.85rem' }}>
                {text}
            </Typography>
        </Box>
    );
}

export default BenefitItem;