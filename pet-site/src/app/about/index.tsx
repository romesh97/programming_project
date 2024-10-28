import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About: React.FC = () =>  {
  return (
    <Container
      sx={{ py: 5, height: "70vh", display: "flex", alignItems: "center" }}
    >
      <Box sx={{ mx: "auto", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Pet Social Media – The Ultimate Social Network for Pet
          Lovers!
        </Typography>
        <Typography variant="body1" paragraph>
          Connect, share, and celebrate the special bond you have with your
          furry, feathered, or scaly friends on Pet Social Media, the social
          media platform designed exclusively for pets and their people. Whether
          you&apos;re a proud pet parent or simply a pet enthusiast, our
          community is the perfect place to share adorable moments, discover new
          pet tips, and connect with like-minded animal lovers.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Why Join Pet Social Media?
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Share Moments:</strong> Post photos and videos of your pets,
          from playful antics to heartwarming snuggles.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Connect with Pet Owners:</strong> Meet and interact with a
          community of passionate pet owners from around the world.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Discover &amp; Learn:</strong> Explore tips, tricks, and
          advice on pet care, training, and more from fellow pet lovers.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Follow Your Favorite Pets:</strong> Stay updated with the
          latest adventures of popular pets and influencers.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Safe &amp; Friendly Community:</strong> Our platform ensures a
          positive and supportive environment for all pet lovers.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Join Us Today!</strong> Create your profile, start sharing
          your pet&apos;s story, and become a part of a community that loves
          pets as much as you do. Welcome to Pet Social Media – Where Pets and
          Their People Connect!
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
