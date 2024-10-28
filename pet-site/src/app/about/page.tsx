import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container
      sx={{ py: 5, height: "70vh", display: "flex", alignItems: "center" }}
    >
      <Box sx={{ mx: "auto", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Pet Site – The Ultimate Social Network for Pet Lovers!
        </Typography>
        <Typography variant="body1" paragraph>
          Connect, share, and celebrate the special bond of companionship on
          PawMates, the premier matchmaking platform designed exclusively for
          dogs to meet their perfect partners. Whether your pup is looking for a
          playdate pal or searching for puppy love, our community is the perfect
          place to make meaningful connections.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Why Join Pet Site?
        </Typography>
        {/* Put something Special here */}
      </Box>
    </Container>
  );
};

export default About;
