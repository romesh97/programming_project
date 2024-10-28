"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
  TextField,
} from "@mui/material";
import Link from "next/link";

//TODO: Add a Loading button

const Signup: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  if (!isLoaded) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100dvh",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  return (
    <Container maxWidth="xs">
      <Typography
        variant="h2"
        className="my-8"
        textAlign="center"
        fontWeight={500}
      >
        Create An Account
      </Typography>
      {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
      <Box component="form" >
        <TextField
          required
          value={firstName}
          name="firstName"
          id="firstName"
          label="Name"
          fullWidth
          autoFocus
          variant="outlined"
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <TextField
          required
          value={email}
          name="email"
          id="email"
          label="Email"
          fullWidth
          variant="outlined"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        
        <TextField
          value={password}
          name="password"
          id="password"
          label="Password"
          fullWidth
          type="password"
          variant="outlined"
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "#F0801A !important",
            color: "#FFF",
            borderRadius: "15px",
          }}
        >
          Register
        </Button>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ mt: "23px" }}
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
            }}
          >
            Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
