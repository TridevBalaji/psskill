import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: "black", padding: 2 }}>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "" }}
      >
        <Box sx={{textAlign:"left"}}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#FF4081"  }}
        >
          MyApp
        </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/" color="primary">
            Home
          </Button>
          <Button component={Link} to="/about" color="primary">
            About
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
