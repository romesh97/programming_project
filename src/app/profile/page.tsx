"use client";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

//components
import PetCard, { PetCardProps } from "../components/common/petcard/page";
import { useEffect, useState } from "react";
import { getAllPostsByUserId } from "../services/authService";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const router = useRouter();
  const { user, isLoggedIn } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchPets = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await getAllPostsByUserId(user.uid);
  //       const data = response.data; // Accessing the 'data' property of the response
  //       console.log("Fetched Data:", data);

  //       if (Array.isArray(data)) {
  //         const transformedData: PetCardProps[] = data.map((pet: any) => ({
  //           id: pet.id || pet._id || `${pet.name}-${pet.age}`,
  //           name: pet.name,
  //           shortDescription: pet.shortDescription || pet.description,
  //           age: pet.age,
  //           gender: pet.gender,
  //           location: pet.location,
  //           breed: pet.breed,
  //           profileImage: pet.profileImage,
  //           title: pet.title,
  //           weight: pet.weight,
  //         }));
  //         setPosts(transformedData);
  //       } else {
  //         console.error("Data is not an array");
  //       }
  //     } catch (error) {
  //       console.error("There was an error fetching the posts data!", error);
  //     } finally {
  //       // setIsPostLoading(false);
  //     }
  //   };

  //   fetchPets();
  // }, []);

  return (
    <Container sx={{ px: 5, py: 2 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        sx={{ pl: 3 }}
      >
        <Typography variant="h4" fontWeight="bold">
          MY POSTS{isLoggedIn.toString()}
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "#F0801A !important",
            color: "#FFF",
            borderRadius: 2,
            height: "45px",
            width: "120px",
            fontWeight: "bold",
          }}
          onClick={() => router.push("/profile/my-posts")}
          variant="contained"
        >
          Add Post
        </Button>
      </Stack>

      {/* Delete Confirmation Dialog */}
    </Container>
  );
}