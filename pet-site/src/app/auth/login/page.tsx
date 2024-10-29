// src/app/auth/login/page.tsx
"use client";
import { useState } from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container maxWidth="xs" sx={{ height: "70vh" }}>
      <Box py={8}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Login
        </Typography>
        <Box component="form">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
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
            Login
          </Button>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Typography variant="h6" textAlign="center" sx={{ color: "#777" }}>
              Dont have an Account ?
            </Typography>
            <Link
              href="/auth/signup"
              prefetch={false}
              style={{
                color: "#F0801A !important",
                fontWeight: 500,
                backgroundColor: "F0801A",
              }}
            >
              Register
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
