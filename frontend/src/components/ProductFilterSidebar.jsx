import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    RadioGroup,
    Radio,
    Slider,
    Divider,
    Rating,
    Button,
    Collapse,
    IconButton,
    Drawer,
    Badge,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PROVINCES } from './provinces';
import { CATEGORIES } from './category';

const PRICE_RANGES = [
    { label: 'All Range', min: 0, max: Infinity },
    { label: 'Under ฿500', min: 0, max: 500 },
    { label: '฿500 - ฿1,000', min: 500, max: 1000 },
    { label: '฿1,000 - ฿2,000', min: 1000, max: 2000 },
    { label: 'Over ฿2,000', min: 2000, max: Infinity },
];

const RATING_OPTIONS = [
    { stars: 4, label: '4 Stars & Up' },
    { stars: 3, label: '3 Stars & Up' },
    { stars: 2, label: '2 Stars & Up' },
    { stars: 1, label: '1 Star & Up' },
];

function FilterContent({
    selectedProvinces,
    selectedCategories,
    priceRange,
    minRating,
    expandedSections,
    toggleSection,
    handleProvinceToggle,
    handleCategoryToggle,
    handlePriceRangeChange,
    handleSliderChange,
    handleRatingChange,
    handleClearFilters,
    activeFilterCount,
    onClose,
}) {
    return (
        <Box
            sx={{
                width: '100%',
                p: 2,
                bgcolor: '#1e2021',
                height: '100%',
                overflowY: 'auto',
                // custom scrollbar
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-track': { background: '#1e2021' },
                '&::-webkit-scrollbar-thumb': { background: '#3b4043', borderRadius: '4px' },
            }}
        >
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h6" sx={{ color: '#FF8A65', fontWeight: 600 }}>
                        Filters
                    </Typography>
                    {activeFilterCount > 0 && (
                        <Box
                            sx={{
                                bgcolor: '#FF8A65',
                                color: '#1e2021',
                                borderRadius: '50%',
                                width: 22,
                                height: 22,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '11px',
                                fontWeight: 700,
                            }}
                        >
                            {activeFilterCount}
                        </Box>
                    )}
                </Box>
                {/* Close button — shown only in Drawer (mobile) */}
                {onClose && (
                    <IconButton onClick={onClose} size="small" sx={{ color: '#bdb7ae' }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>

            {activeFilterCount > 0 && (
                <Button
                    fullWidth
                    size="small"
                    onClick={handleClearFilters}
                    sx={{
                        color: '#FF8A65',
                        border: '1px solid #FF8A65',
                        mb: 2,
                        fontSize: '12px',
                        '&:hover': { bgcolor: 'rgba(255, 138, 101, 0.1)' },
                    }}
                >
                    Clear All
                </Button>
            )}

            {/* Province Section */}
            <Box sx={{ mb: 1 }}>
                <Box
                    onClick={() => toggleSection('province')}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        p: 1,
                        borderRadius: 1,
                        '&:hover': { bgcolor: '#2a2c2d' },
                    }}
                >
                    <Typography variant="subtitle2" sx={{ color: '#e8e6e3', fontWeight: 600 }}>
                        Province
                    </Typography>
                    {expandedSections.province ? (
                        <ExpandLess sx={{ color: '#FF8A65' }} />
                    ) : (
                        <ExpandMore sx={{ color: '#bdb7ae' }} />
                    )}
                </Box>
                <Collapse in={expandedSections.province}>
                    <FormGroup sx={{ pl: 1, maxHeight: 220, overflowY: 'auto', mb: 2,
                        '&::-webkit-scrollbar': { width: '3px' },
                        '&::-webkit-scrollbar-thumb': { background: '#3b4043', borderRadius: '4px' },
                    }}>
                        {PROVINCES.map((prov) => (
                            <FormControlLabel
                                key={prov.value}
                                control={
                                    <Checkbox
                                        checked={selectedProvinces.includes(prov.value)}
                                        onChange={() => handleProvinceToggle(prov.value)}
                                        size="small"
                                        sx={{
                                            color: '#bdb7ae',
                                            '&.Mui-checked': { color: '#FF8A65' },
                                        }}
                                    />
                                }
                                label={<Typography variant="body2" sx={{ color: '#cdc8c2' }}>{prov.label}</Typography>}
                            />
                        ))}
                    </FormGroup>
                </Collapse>
            </Box>

            <Divider sx={{ borderColor: '#3b4043', my: 1 }} />

            {/* Category Section */}
            <Box sx={{ mb: 1 }}>
                <Box
                    onClick={() => toggleSection('category')}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        p: 1,
                        borderRadius: 1,
                        '&:hover': { bgcolor: '#2a2c2d' },
                    }}
                >
                    <Typography variant="subtitle2" sx={{ color: '#e8e6e3', fontWeight: 600 }}>
                        Category
                    </Typography>
                    {expandedSections.category ? (
                        <ExpandLess sx={{ color: '#FF8A65' }} />
                    ) : (
                        <ExpandMore sx={{ color: '#bdb7ae' }} />
                    )}
                </Box>
                <Collapse in={expandedSections.category}>
                    <FormGroup sx={{ pl: 1, maxHeight: 220, overflowY: 'auto', mb: 2,
                        '&::-webkit-scrollbar': { width: '3px' },
                        '&::-webkit-scrollbar-thumb': { background: '#3b4043', borderRadius: '4px' },
                    }}>
                        {CATEGORIES.map((cat) => (
                            <FormControlLabel
                                key={cat}
                                control={
                                    <Checkbox
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => handleCategoryToggle(cat)}
                                        size="small"
                                        sx={{
                                            color: '#bdb7ae',
                                            '&.Mui-checked': { color: '#FF8A65' },
                                        }}
                                    />
                                }
                                label={<Typography variant="body2" sx={{ color: '#cdc8c2' }}>{cat}</Typography>}
                            />
                        ))}
                    </FormGroup>
                </Collapse>
            </Box>

            <Divider sx={{ borderColor: '#3b4043', my: 1 }} />

            {/* Price Range Section */}
            <Box sx={{ mb: 1 }}>
                <Box
                    onClick={() => toggleSection('price')}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        p: 1,
                        borderRadius: 1,
                        '&:hover': { bgcolor: '#2a2c2d' },
                    }}
                >
                    <Typography variant="subtitle2" sx={{ color: '#e8e6e3', fontWeight: 600 }}>
                        Price Range
                    </Typography>
                    {expandedSections.price ? (
                        <ExpandLess sx={{ color: '#FF8A65' }} />
                    ) : (
                        <ExpandMore sx={{ color: '#bdb7ae' }} />
                    )}
                </Box>
                <Collapse in={expandedSections.price}>
                    <RadioGroup
                        value={priceRange.label}
                        onChange={handlePriceRangeChange}
                        sx={{ pl: 1, mb: 2 }}
                    >
                        {PRICE_RANGES.map((range) => (
                            <FormControlLabel
                                key={range.label}
                                value={range.label}
                                control={
                                    <Radio
                                        size="small"
                                        sx={{
                                            color: '#bdb7ae',
                                            '&.Mui-checked': { color: '#FF8A65' },
                                        }}
                                    />
                                }
                                label={<Typography variant="body2" sx={{ color: '#cdc8c2' }}>{range.label}</Typography>}
                            />
                        ))}
                    </RadioGroup>

                    {priceRange.label === 'custom' && (
                        <Box sx={{ px: 2, mb: 2 }}>
                            <Slider
                                value={[priceRange.min, priceRange.max]}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={5000}
                                step={100}
                                sx={{
                                    color: '#FF8A65',
                                    '& .MuiSlider-thumb': { bgcolor: '#FF8A65' },
                                    '& .MuiSlider-track': { bgcolor: '#FF8A65' },
                                    '& .MuiSlider-rail': { bgcolor: '#3b4043' },
                                }}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#bdb7ae', mt: 1 }}>
                                <span>฿{priceRange.min}</span>
                                <span>฿{priceRange.max === Infinity ? '5000+' : priceRange.max}</span>
                            </Box>
                        </Box>
                    )}
                </Collapse>
            </Box>

            <Divider sx={{ borderColor: '#3b4043', my: 1 }} />

            {/* Rating Section */}
            <Box sx={{ mb: 1 }}>
                <Box
                    onClick={() => toggleSection('rating')}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        p: 1,
                        borderRadius: 1,
                        '&:hover': { bgcolor: '#2a2c2d' },
                    }}
                >
                    <Typography variant="subtitle2" sx={{ color: '#e8e6e3', fontWeight: 600 }}>
                        Minimum Rating
                    </Typography>
                    {expandedSections.rating ? (
                        <ExpandLess sx={{ color: '#FF8A65' }} />
                    ) : (
                        <ExpandMore sx={{ color: '#bdb7ae' }} />
                    )}
                </Box>
                <Collapse in={expandedSections.rating}>
                    <RadioGroup value={minRating} onChange={(e) => handleRatingChange(Number(e.target.value))} sx={{ pl: 1 }}>
                        <FormControlLabel
                            value={0}
                            control={
                                <Radio
                                    size="small"
                                    sx={{
                                        color: '#bdb7ae',
                                        '&.Mui-checked': { color: '#FF8A65' },
                                    }}
                                />
                            }
                            label={<Typography variant="body2" sx={{ color: '#cdc8c2' }}>All Ratings</Typography>}
                        />
                        {RATING_OPTIONS.map(({ stars, label }) => (
                            <FormControlLabel
                                key={stars}
                                value={stars}
                                control={
                                    <Radio
                                        size="small"
                                        sx={{
                                            color: '#bdb7ae',
                                            '&.Mui-checked': { color: '#FF8A65' },
                                        }}
                                    />
                                }
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Rating value={stars} readOnly size="small" sx={{ color: '#FFD54F' }} />
                                        <Typography variant="body2" sx={{ color: '#cdc8c2' }}>
                                            {label}
                                        </Typography>
                                    </Box>
                                }
                            />
                        ))}
                    </RadioGroup>
                </Collapse>
            </Box>
        </Box>
    );
}

function ProductFilterSidebar({
    selectedProvinces,
    setSelectedProvinces,
    selectedCategories,
    setSelectedCategories,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [expandedSections, setExpandedSections] = useState({
        province: true,
        category: true,
        price: true,
        rating: true,
    });
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const updateSearchParams = (provinces, categories, price, rating) => {
        const params = new URLSearchParams(searchParams);

        if (provinces.length > 0) {
            params.set('provinces', provinces.join(','));
        } else {
            params.delete('provinces');
        }

        if (categories.length > 0) {
            params.set('categories', categories.join(','));
        } else {
            params.delete('categories');
        }

        if (price.label === 'All Range') {
            params.delete('priceMin');
            params.delete('priceMax');
        } else {
            params.set('priceMin', price.min);
            params.set('priceMax', price.max);
        }

        if (rating > 0) {
            params.set('minRating', rating);
        } else {
            params.delete('minRating');
        }

        setSearchParams(params);
    };

    const handleProvinceToggle = (provinceValue) => {
        const updatedProvinces = selectedProvinces.includes(provinceValue)
            ? selectedProvinces.filter((p) => p !== provinceValue)
            : [...selectedProvinces, provinceValue];
        setSelectedProvinces(updatedProvinces);
        updateSearchParams(updatedProvinces, selectedCategories, priceRange, minRating);
    };

    const handleCategoryToggle = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updatedCategories);
        updateSearchParams(selectedProvinces, updatedCategories, priceRange, minRating);
    };

    const handlePriceRangeChange = (event) => {
        const value = event.target.value;
        const range = PRICE_RANGES.find((r) => r.label === value);
        if (range) {
            setPriceRange(range);
            updateSearchParams(selectedProvinces, selectedCategories, range, minRating);
        }
    };

    const handleSliderChange = (event, newValue) => {
        const newRange = { min: newValue[0], max: newValue[1], label: 'custom' };
        setPriceRange(newRange);
        updateSearchParams(selectedProvinces, selectedCategories, newRange, minRating);
    };

    const handleRatingChange = (newRating) => {
        setMinRating(newRating);
        updateSearchParams(selectedProvinces, selectedCategories, priceRange, newRating);
    };

    const handleClearFilters = () => {
        setSelectedProvinces([]);
        setSelectedCategories([]);
        setPriceRange({ label: 'All Range', min: 0, max: Infinity });
        setMinRating(0);
        setSearchParams(new URLSearchParams());
    };

    const activeFilterCount =
        selectedProvinces.length +
        selectedCategories.length +
        (priceRange.label === 'custom' ? 1 : 0) +
        (minRating > 0 ? 1 : 0);

    const sharedProps = {
        selectedProvinces,
        setSelectedProvinces,
        selectedCategories,
        setSelectedCategories,
        priceRange,
        setPriceRange,
        minRating,
        setMinRating,
        expandedSections,
        toggleSection,
        handleProvinceToggle,
        handleCategoryToggle,
        handlePriceRangeChange,
        handleSliderChange,
        handleRatingChange,
        handleClearFilters,
        activeFilterCount,
    };

    return (
        <>
            {/* ── DESKTOP: sticky sidebar ── */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'block' },
                    width: 260,
                    flexShrink: 0,
                    position: 'sticky',
                    top: 20,
                    maxHeight: 'calc(100vh - 40px)',
                    overflowY: 'auto',
                    borderRadius: 2,
                    border: '1px solid #3b4043',
                    '&::-webkit-scrollbar': { width: '4px' },
                    '&::-webkit-scrollbar-track': { background: '#1e2021' },
                    '&::-webkit-scrollbar-thumb': { background: '#3b4043', borderRadius: '4px' },
                }}
            >
                <FilterContent {...sharedProps} onClose={null} />
            </Box>

            {/* ── MOBILE: floating FAB + bottom drawer ── */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                {/* Floating button — fixed bottom right */}
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        right: 24,
                        zIndex: 1200,
                    }}
                >
                    <Badge
                        badgeContent={activeFilterCount}
                        sx={{
                            '& .MuiBadge-badge': {
                                bgcolor: '#FF8A65',
                                color: '#1e2021',
                                fontWeight: 700,
                                fontSize: '11px',
                            },
                        }}
                    >
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            sx={{
                                width: 52,
                                height: 52,
                                bgcolor: '#FF8A65',
                                color: '#1e2021',
                                boxShadow: '0 4px 20px rgba(255,138,101,0.45)',
                                '&:hover': {
                                    bgcolor: '#e87550',
                                    transform: 'scale(1.08)',
                                },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <TuneIcon />
                        </IconButton>
                    </Badge>
                </Box>

                {/* Bottom Drawer */}
                <Drawer
                    anchor="bottom"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    PaperProps={{
                        sx: {
                            bgcolor: '#1e2021',
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            border: '1px solid #3b4043',
                            borderBottom: 'none',
                            maxHeight: '80vh',
                        },
                    }}
                >
                    {/* Drag handle */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 1.5, pb: 0.5 }}>
                        <Box
                            sx={{
                                width: 36,
                                height: 4,
                                borderRadius: 2,
                                bgcolor: '#3b4043',
                            }}
                        />
                    </Box>

                    <FilterContent
                        {...sharedProps}
                        onClose={() => setDrawerOpen(false)}
                    />
                </Drawer>
            </Box>
        </>
    );
}

export default ProductFilterSidebar;