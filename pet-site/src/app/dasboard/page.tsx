// src/app/auth/login/page.tsx
"use client";
import { Typography, Container, Box } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="xs" sx={{ height: "70vh" }}>
      <Box py={8}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard;
