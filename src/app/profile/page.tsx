"use client";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

//components
import PetCard, { PetCardProps } from "../components/common/petcard/page";
import { useEffect, useState } from "react";
import { getAllPostsByUserId } from "../services/authService";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContext";
import { deletePostById } from "../services/authService";

export default function Dashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { token } = useAuth();
  const [postId, setPostId] = useState<string>("");
  const { user, isLoggedIn } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deletePost, setDeletePost] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      if (!user || !isLoggedIn) {
        console.error("User is not logged in or undefined.");
        return;
      }

      setIsLoading(true);
      try {
        console.log(user.uid);
        const response = await getAllPostsByUserId(user.uid);
        const data = response.data;
        console.log("Fetched Data:", data);

        if (Array.isArray(data)) {
          const transformedData: PetCardProps[] = data.map((pet: any) => ({
            id: pet.id || pet._id || `${pet.name}-${pet.age}`,
            name: pet.name,
            contact: pet.shortDescription || pet.description,
            age: pet.age,
            gender: pet.gender,
            location: pet.location,
            breed: pet.breed,
            profileImage: pet.profileImage,
            title: pet.title,
            weight: pet.weight,
          }));
          setPosts(transformedData);
        } else {
          console.error("Data is not an array");
        }
      } catch (error) {
        console.error("There was an error fetching the posts data!", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoggedIn && user) {
      fetchPets();
    }
  }, [user, isLoggedIn]);

  const handleDelete = async (postId: string) => {
    try {
      const message = await deletePostById(postId);
      enqueueSnackbar(`${message}`, {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });

      // Remove the deleted post from the local state
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Container sx={{ px: 5, py: 2 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Typography variant="h4" fontWeight="bold">
          MY POSTS
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
          onClick={() => router.push(`/profile/posts`)}
          variant="contained"
        >
          Add Post
        </Button>
      </Stack>

      <Stack direction="column" alignItems="center" width="100%">
        <Grid container spacing={5}>
          {posts.slice(0, 3).map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <PetCard
                id={item.id}
                name={item.name}
                contact={item.contact}
                age={item.age}
                gender={item.gender}
                location={item.location}
                breed={item.breed}
                profileImage={item.profileImage}
                title={item.title}
                weight={item.weight}
                onEdit={() => router.push(`/profile/posts/${item.id}`)}
                profileView={true}
                onDelete={() => handleDelete(item.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* Delete Confirmation Dialog */}
    </Container>
  );
}
