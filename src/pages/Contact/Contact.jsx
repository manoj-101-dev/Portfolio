import { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import phone from "../../logos/phone.png";
import email from "../../logos/email.png";
import head from "../../logos/head.png";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://portfolio-166r.onrender.com/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully!");

        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // You can update the UI or perform other actions upon successful email sending
      } else {
        console.error("Error sending email:", response.statusText);
        // Handle error appropriately
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle other errors
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container
      id="contact"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Get in Touch
        <img
          src={head}
          alt="HeadPhone"
          style={{ width: 50, height: 50, marginLeft: 20, marginBottom: 10 }}
        />
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Have a project in mind or just want to say hi? Feel free to reach out!
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Phone and Email */}
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          spacing={2}
          alignItems="center"
          textAlign="center"
        >
          <Grid item>
            <Typography variant="h5" marginRight={10}>
              <img
                src={phone}
                alt="Phone"
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
              +91 9025819545
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              <img
                src={email}
                alt="Email"
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
              manoj19545@gmail.com
            </Typography>
          </Grid>
        </Grid>
        {/* Form */}
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="name"
              style={{ background: "white" }}
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="email"
              style={{ background: "white" }}
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              fullWidth
              required
              name="message"
              style={{ background: "white" }}
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              id="msg-btn"
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
