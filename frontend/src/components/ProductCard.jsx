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
                width: 320,
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#111",
                color: "#fff",
                position: "relative"
            }}
        >
            {/* Image Section */}
            <Box sx={{ position: "relative" }}>
                <CardMedia
                    component="img"
                    height="325"
                    image={image}
                    alt={title}
                />

                {/* Category Badge */}
                <Chip
                    label={category}
                    sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: "#8D6E1E",
                        color: "#fff",
                        fontWeight: 600
                    }}
                />

                {/* Location Badge */}
                <Chip
                    icon={<LocationOnIcon sx={{ fontSize: 18 }} />}
                    label={location}
                    sx={{
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        bgcolor: "rgba(0,0,0,0.7)",
                        color: "#FFAB91"
                    }}
                />
            </Box>

            {/* Content */}
            <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    {title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <StarIcon sx={{ color: "#FFD54F", fontSize: 20, mr: 0.5 }} />
                    <Typography variant="body1" sx={{ mr: 1 }}>
                        {rating}
                    </Typography>
                    <Typography variant="body2" color="gray">
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
                        sx={{ color: "#FF8A65", fontWeight: 700 }}
                    >
                        ฿{price.toLocaleString()}
                    </Typography>

                    <IconButton
                        sx={{
                            bgcolor: "#A0522D",
                            borderRadius:'10px',
                            color: "#fff",
                            "&:hover": { bgcolor: "#8B4513" }
                        }}
                    >
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}