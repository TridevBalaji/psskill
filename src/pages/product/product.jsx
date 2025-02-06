import { Grid, Card, CardMedia, CardContent, Typography, Button,Box } from "@mui/material";

const products = [
  { id: 1, name: "Smartphone", price: "₹15,999", img: "/mobile.avif" },
  { id: 2, name: "Laptop", price: "₹45,999", img: "/images-4.webp" },
  { id: 3, name: "Headphones", price: "₹1,999", img: "/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: "₹3,999", img: "/smart.webp" },
  { id: 1, name: "Smartphone", price: "₹15,999", img: "/mobile.avif" },
  { id: 2, name: "Laptop", price: "₹45,999", img: "/images-4.webp" },
  { id: 3, name: "Headphones", price: "₹1,999", img: "/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: "₹3,999", img: "/smart.webp" },
  { id: 1, name: "Smartphone", price: "₹15,999", img: "/mobile.avif" },
  { id: 2, name: "Laptop", price: "₹45,999", img: "/images-4.webp" },
  { id: 3, name: "Headphones", price: "₹1,999", img: "/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: "₹3,999", img: "/smart.webp" },
];

const Product = () => {
  return (
    <Box sx={{backgroundImage:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgb(252, 70, 170) 100%)",padding: 3}}>
    <Grid container spacing={3} >
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={2} key={product.id}>
          <Card sx={{ maxWidth: 250, boxShadow: 3 }}>
            <CardMedia component="img" height="140" image={product.img} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="text.secondary">{product.price}</Typography>
              <Button variant="contained" sx={{ mt: 1 }} fullWidth>
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default Product;
