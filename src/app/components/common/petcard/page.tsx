import {
  Box,
  Card,
  IconButton,
  Paper,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FemaleIcon from "@mui/icons-material/Female";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DogIcon from "../../../../../public/icons/dog_icon";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// -----------------TODO----------------
// Add next Image component
export interface PetCardProps {
  id?: string;
  title: string;
  name: string;
  shortDescription: string;
  profileImage: string;
  weight: string;
  sx?: SxProps;
  age: string;
  gender: string;
  location: string;
  breed: string;
  profileView?: boolean;
  onEdit?: () => void;
  onDelete?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function PetCard({
  id,
  title,
  name,
  shortDescription,
  profileImage,
  sx,
  age,
  gender,
  location,
  breed,
  profileView = false,
  onEdit,
  onDelete,
}: PetCardProps) {
  return (
    <Card
      sx={{
        boxShadow:
          "0px 0.5px 1.75px rgba(0, 0, 0, 0.039), 0px 1.85px 6.25px rgba(0, 0, 0, 0.19);",
        padding: 2,
        alignItems: "center",
        borderRadius: 2,
        position: "relative",
        ...sx,
      }}
    >
      {profileView && (
        <Box sx={{ position: "absolute", top: 10, right: 10 }}>
          <IconButton onClick={onEdit} size="small">
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={onDelete} size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          component="img"
          src={profileImage}
          alt={name}
          sx={{ width: 100, height: 100, borderRadius: "20%" }}
        />
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#808080" }}>
            {shortDescription}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            <Stack direction="column" alignItems="center" spacing={1}>
              <CalendarMonthIcon sx={{ height: 24, width: 24 }} />
              <LocationOnIcon sx={{ height: 24, width: 24 }} />
            </Stack>
            <Stack direction="column" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: "13px", color: "#808080" }}>
                {age} Years
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#808080" }}>
                {location}
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
