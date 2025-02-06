import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.8)",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Name" name="name" variant="outlined" fullWidth value={formData.name} onChange={handleChange} />
          <TextField label="Email" name="email" variant="outlined" fullWidth value={formData.email} onChange={handleChange} />
          <TextField label="Message" name="message" variant="outlined" multiline rows={4} fullWidth value={formData.message} onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
