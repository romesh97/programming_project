"use client";
import { Box, Container, Grid, Stack } from "@mui/material";

//components
import TopSection from "./components/topSection/page";
import PetCard, { PetCardProps } from "./components/common/petcard/page";
import { useEffect, useState } from "react";
import { getAllPosts } from "./services/authService";

export default function Home() {
  const [pets, setPets] = useState<PetCardProps[]>([]);
  const [isPostLoading, setIsPostLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPets = async () => {
      setIsPostLoading(true);
      try {
        const response = await getAllPosts();
        const data = response.data; // Accessing the 'data' property of the response
        console.log("Fetched Data:", data);

        if (Array.isArray(data)) {
          const transformedData: PetCardProps[] = data.map((pet: any) => ({
            id: pet.id || pet._id || `${pet.name}-${pet.age}`,
            name: pet.name,
            shortDescription: pet.shortDescription || pet.description,
            age: pet.age,
            gender: pet.gender,
            location: pet.location,
            breed: pet.breed,
            profileImage: pet.profileImage,
            title: pet.title,
            weight: pet.weight,
          }));
          setPets(transformedData);
        } else {
          console.error("Data is not an array");
        }
      } catch (error) {
        console.error("There was an error fetching the posts data!", error);
      } finally {
        setIsPostLoading(false);
      }
    };

    fetchPets();
  }, []);

  return (
    <Box component="div">
      <TopSection />
      <Container>
        <Stack direction="row" alignItems="center" width="100%">
          <Grid container spacing={5}>
            {pets.slice(0, 3).map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <PetCard
                  id={item.id}
                  name={item.name}
                  shortDescription={item.shortDescription}
                  age={item.age}
                  gender={item.gender}
                  location={item.location}
                  breed={item.breed}
                  profileImage={item.profileImage}
                  title={item.title}
                  weight={item.weight}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
