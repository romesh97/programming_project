import { Box, Card, Paper, Stack, SxProps, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FemaleIcon from "@mui/icons-material/Female";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DogIcon from "../../../../../public/icons/dog_icon";

// -----------------TODO----------------
// Add next Image component
interface InfoCardProps {
  name: string;
  text: string;
  image?: string;
  sx?: SxProps;
  months: string;
  gender: string;
  city: string;
  breed: string;
}

export default function PetCard({
  name,
  text,
  image,
  sx,
  months,
  gender,
  city,
  breed,
}: InfoCardProps) {
  return (
    <Card
      sx={{
        // boxShadow:
        //   "0px 0.5px 1.75px rgba(0, 0, 0, 0.039), 0px 1.85px 6.25px rgba(0, 0, 0, 0.19);",
        padding: 2,
        alignItems: "center",
        borderRadius: 2,
        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{ width: 100, height: 100, borderRadius: "20%" }}
        />
        <Box>
          <Typography sx={{ fontSize: "30px", fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#808080" }}>
            {text}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            <Stack direction="column" alignItems="center" spacing={1}>
              <CalendarMonthIcon sx={{ height: 24, width: 24 }} />
              <LocationOnIcon sx={{ height: 24, width: 24 }} />
            </Stack>
            <Stack direction="column" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: "13px", color: "#808080" }}>
                {months} Months
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#808080" }}>
                {city}
              </Typography>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={1}>
              <FemaleIcon sx={{ height: 24, width: 24 }} />
              <DogIcon sx={{ height: 24, width: 24 }} />
            </Stack>
            <Stack direction="column" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: "13px", color: "#808080" }}>
                {gender}
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#808080" }}>
                {breed}
              </Typography>
            </Stack>
          </Stack>
          <Typography sx={{ fontSize: "13px", color: "#C6C6C6" }} mt={2}>
            2023-08-13
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
