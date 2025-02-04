import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import { Link, useNavigate,useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate("/t1");
  };

  return (
    <Box sx={{ backgroundColor: "black", padding: 2 }}>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF4081" }}>
            MyApp
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="primary" onClick={handleNavigate}>
            Go to To-Do List
          </Button>
          <Button
          component={Link} to="/"color={location.pathname === "/" ? "secondary" : "primary"}>
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
