import {
    Card,
    CardMedia,
    CardContent,
    Box,
    Typography,
    Chip,
    IconButton
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ProductCard({
    image,
    category = "None",
    location = "None",
    title = "None",
    rating = 0,
    reviews = 0,
    price = 0
}) {
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: 320, md: 320 },
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#111",
                color: "#fff",
                position: "relative",
                boxShadow: "0 4px 24px 0 rgba(255,138,101,0.08)",
                border: "1.5px solid #232323",
                transition: "box-shadow 0.2s, border 0.2s",
                "&:hover": {
                    boxShadow: "0 8px 32px 0 rgba(255,138,101,0.18)",
                    border: "1.5px solid #FF8A65",
                }
            }}
        >
            {/* Image Section */}
            <Box sx={{ position: "relative" }}>
                <CardMedia
                    component="img"
                    height={ { xs: 180, sm: 220, md: 260, lg: 325 } }
                    image={image}
                    alt={title}
                    sx={{
                        objectFit: "cover",
                        width: "100%",
                        height: { xs: 180, sm: 220, md: 260, lg: 325 },
                        transition: "filter 0.2s",
                        filter: "brightness(0.97)",
                    }}
                />

                {/* Category Badge */}
                <Chip
                    label={category}
                    sx={{
                        position: "absolute",
                        top: { xs: 10, sm: 16 },
                        right: { xs: 10, sm: 16 },
                        bgcolor: "#8D6E1E",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: { xs: 11, sm: 13 },
                        px: { xs: 1, sm: 2 },
                        boxShadow: "0 2px 8px 0 rgba(141,110,30,0.13)"
                    }}
                />

                {/* Location Badge */}
                <Chip
                    icon={<LocationOnIcon sx={{ fontSize: 18 }} />}
                    label={location}
                    sx={{
                        position: "absolute",
                        bottom: { xs: 10, sm: 16 },
                        left: { xs: 10, sm: 16 },
                        bgcolor: "rgba(0,0,0,0.7)",
                        color: "#FFAB91",
                        fontSize: { xs: 11, sm: 13 },
                        px: { xs: 1, sm: 2 },
                        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.13)"
                    }}
                />
            </Box>

            {/* Content */}
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{
                    fontSize: { xs: 16, sm: 18 }
                }}>
                    {title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <StarIcon sx={{ color: "#FFD54F", fontSize: 20, mr: 0.5 }} />
                    <Typography variant="body1" sx={{ mr: 1, fontSize: { xs: 14, sm: 16 } }}>
                        {rating}
                    </Typography>
                    <Typography variant="body2" color="gray" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                        • {reviews} reviews
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#FF8A65",
                            fontWeight: 700,
                            fontSize: { xs: 18, sm: 22 }
                        }}
                    >
                        ฿{price.toLocaleString()}
                    </Typography>

                    <IconButton
                        sx={{
                            bgcolor: "#A0522D",
                            borderRadius: '10px',
                            color: "#fff",
                            "&:hover": { bgcolor: "#8B4513" },
                            boxShadow: "0 2px 8px 0 rgba(160,82,45,0.13)"
                        }}
                    >
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}