"use client";
import {
  Container,
  Typography,
  Box,
  Stack,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";

// Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";

//social Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

//TODO: Fix icons issue
const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#3D3D3D",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack display="flex" flexDirection="row" alignItems="center">
              <IconButton color="secondary">
                <LocalPhoneIcon
                  sx={{ height: 70, width: 70, color: "white" }}
                />
              </IconButton>
              <Box>
                <Typography variant="h5" color="white" gutterBottom>
                  Call Us
                </Typography>
                <Typography variant="h3" color="secondary">
                  0899528625
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack display="flex" flexDirection="row" alignItems="center">
              <IconButton color="secondary">
                <EmailIcon sx={{ height: 70, width: 70, color: "white" }} />
              </IconButton>
              <Box>
                <Typography variant="h5" color="white" gutterBottom>
                  Email us
                </Typography>
                <Typography variant="h3" color="secondary">
                  romeshperera97@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
            >
              <IconButton color="secondary">
                <GroupsIcon sx={{ height: 40, width: 40, color: "white" }} />
              </IconButton>
              <Box>
                <Typography variant="h5" color="white" gutterBottom>
                  Follow us
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Link href="https://www.facebook.com/" color="secondary">
                    <FacebookIcon sx={{ height: 22, width: 22 }} />
                  </Link>
                  <Link href="https://www.facebook.com/" color="secondary">
                    <InstagramIcon sx={{ height: 22, width: 22 }} />
                  </Link>
                  <Link href="https://www.facebook.com/" color="secondary">
                    <LinkedInIcon sx={{ height: 22, width: 22 }} />
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Divider
          sx={{
            my: 3,
            background: "#ffff",
            opacity: 0.4,
            // mx: { xs: 0, sm: "-50%" },
          }}
        />
        <Box>
          <Typography variant="body2" color="white" align="center">
            © Copyright 2024 by Romesh Perera
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

{
  /* <Link
    href="/"
    color="inherit"
    onClick={(e) => {
      e.preventDefault();
      router.push("/");
    }}
  >
    Home
  </Link>; */
}
