import { useParams, useNavigate } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    Button,
} from '@mui/material';
import { PRODUCTS } from '../components/product';

import Navbar from "../components/navbar/Navbar";
import ThisProduct from '../components/productdetail/ThisProduct';
import ProductTab from '../components/productdetail/ProductTab';
import RelateProduct from '../components/productdetail/RelateProduct';
import Footer from '../components/footer';

function ProductDetail() {
    const { id } = useParams();
    const product = PRODUCTS.find((p) => p.id === Number(id));

    const navigate = useNavigate();

    if (!product) {
        return (
            <Box sx={{ bgcolor: '#181A1B', minHeight: '100vh', py: 8 }}>
                <Container>
                    <Typography variant="h4" color="#e8e6e3">
                        Product not found
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/')}
                        sx={{ mt: 2, bgcolor: '#804224' }}
                    >
                        Back to Home
                    </Button>
                </Container>
            </Box>
        );
    }

    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: '#181A1B', minHeight: '100vh', py: { xs: 2, md: 4 } }}>
                <Container maxWidth="lg">
                    {/* Back Button */}
                    <Button
                        onClick={() => navigate(-1)}
                        sx={{
                            color: '#d48a67',
                            mb: 2,
                            textTransform: 'none',
                            fontSize: '1rem',
                            '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                        }}
                    >
                        ← Back to Products
                    </Button>

                    {/* Buy Product */}
                    <ThisProduct product={product} />

                    {/* Product Tabs */}
                    <ProductTab product={product} />
                    

                    {/* Related Products */}
                    <RelateProduct currentProductId={product.id} />
                    
                </Container>
            </Box>
            <Footer />
        </>
    );
}

export default ProductDetail;