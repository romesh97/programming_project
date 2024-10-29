"use client";
import React, { useState } from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import Link from "next/link";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container maxWidth="xs" sx={{ height: "70vh" }}>
      <Box mt={8}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Create A New Account
        </Typography>
        <Box component="form">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            // helperText="Please enter a valid email address"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            helperText="Password should be at least 6 characters long"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 4,
              mb: 2,
              backgroundColor: "#F0801A",
              color: "#FFF",
              "&:hover": {
                backgroundColor: "#F0801A !important",
                color: "#FFF",
              },
            }}
          >
            Register
          </Button>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Typography variant="h6" textAlign="center" sx={{ color: "#777" }}>
              Have an Account ?
            </Typography>
            <Link
              href="/auth/login"
              prefetch={false}
              style={{
                color: "#F0801A !important",
                fontWeight: 500,
                backgroundColor: "F0801A"
              }}
            >
              Login
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;