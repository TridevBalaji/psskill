import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/product");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgb(252, 70, 170) 100%)',
        backgroundPosition: "right",
        padding: 4,
      }}
    >
      <Container
        sx={{
          maxWidth: "500px",
          color: "#fff",
          textAlign: "left",
          background: "rgba(0, 0, 0, 0.6)",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to MyShop
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Discover amazing products at the best prices. Shop now and enjoy exclusive deals!
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleNavigate}>
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
