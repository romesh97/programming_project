"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { register } from "@/app/services/authService";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";

const Register: React.FC = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // setMessage(null);
    try {
      await register({
        email: email,
        firstName: name,
        password: password,
      });

      router.push("/auth/login");
      enqueueSnackbar(`Registration Successful`, {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
    } catch (err: any) {
      if (
        err.response.data.details ===
        "The email address is already in use by another account."
      ) {
        enqueueSnackbar(`The email address is already in use`, {
          variant: "error",
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
      } else {
        enqueueSnackbar(`Registration error`, {
          variant: "error",
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
      }
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ height: "70vh" }}>
      <Box mt={8}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Create A New Account
        </Typography>
        <Box component="form" onSubmit={handleRegister}>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
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
            {loading ? <CircularProgress size={24} /> : "Register"}
          </Button>
          {error && (
            <Typography variant="body2" color="error" mt={2}>
              {error}
            </Typography>
          )}
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
                backgroundColor: "F0801A",
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
