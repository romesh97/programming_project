// src/app/auth/login/page.tsx
"use client";
import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { login } from "@/app/services/authService";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/authContext";
import { useSnackbar } from "notistack";

const Login: React.FC = () => {
  const { setAuthData } = useAuth();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handelLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // setMessage(null);
    try {
      const result = await login({
        email: email,
        password: password,
      });

      if (result.data.error) {
        setError(result.data.error);
      } else {
        const { user, token } = result.data.data;
        console.log("dataa", user, token);
        setAuthData(user, token);
        router.push("/profile");
      }
      enqueueSnackbar(`Login Successful`, {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
    } catch (err: any) {
      if (
        err.response.data.details === "Firebase: Error (auth/invalid-email)."
      ) {
        enqueueSnackbar(`Invalid email address`, {
          variant: "error",
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
      } else if (
        err.response.data.details ===
        "Firebase: Error (auth/invalid-credential)."
      ) {
        enqueueSnackbar(`Invalid Credentials`, {
          variant: "error",
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
      } else {
        enqueueSnackbar(`An unexpected error occurred`, {
          variant: "error",
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
      }
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ height: "70vh" }}>
      <Box py={8}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Login
        </Typography>
        <Box component="form" onSubmit={handelLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
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
            {loading ? <CircularProgress size={24} /> : "Login"}
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
