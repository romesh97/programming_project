"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

//TODO: Fix icons issue
const TopSection: React.FC = () => {
  return (
    <Box position="relative" sx={{ backgroundColor: "#F3F3F3" }}>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ display: { sm: "flex", xs: "none" } }}
      >
        <Image
          src="/images/Group 2.svg"
          // layout="fit"
          alt="dogs breed"
          width={450}
          height={200}
          style={{ objectFit: "contain" }}
        />
        <Image
          src="/images/hero_dog.svg"
          // layout="fit"
          alt="Hero Image"
          width={600}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </Stack>
      {/* Description Section */}
      <Box
        sx={{
          background: "#3D3D3D",
          width: "100%",
          color: "rgba(255, 255, 255, 0.60);",
          px: { sm: "200px", xs: "80px" },
          py: { sm: "150px", xs: "40px" },
        }}
      >
        <Typography variant="body1" align="center" letterSpacing="0.6px">
          Join a lively pet lovers' community to share your passion for all
          kinds of pets. Show off your pet's cute moments, connect with other
          pet enthusiasts, or find care tips and inspiration. Pet-Site is your
          destination to celebrate the joy pets bring. Be part of a community
          that cherishes the bond between pets and their owners. Connect, share,
          and enjoy the journey together!
        </Typography>
      </Box>
    </Box>
  );
};

export default TopSection;
