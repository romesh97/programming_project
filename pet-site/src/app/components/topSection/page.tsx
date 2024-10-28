"use client";
import { Box, Stack } from "@mui/material";
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
          style={{objectFit: "contain"}}
        />
        <Image
          src="/images/hero_dog.svg"
         // layout="fit"
          alt="Hero Image"
          width={600}
          height={300}
          style={{objectFit: "contain"}}
        />
      </Stack>
    </Box>
  );
};

export default TopSection;
