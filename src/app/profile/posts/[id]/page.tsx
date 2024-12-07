"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "@/app/context/authContext";
import Image from "next/image";

interface FormData {
  name: string;
  age: string;
  weight: string;
  title: string;
  location: string;
  gender: string;
  description: string;
  breed: string;
  profileImage: File | null;
}

interface PostData {
  name: string;
  age: string;
  weight: string;
  title: string;
  location: string;
  gender: string;
  description: string;
  breed: string;
  profileImage: string | null;
}

const EditPost: React.FC = () => {
  const params = useParams();
  const postId = params.id as string;
  const { token } = useAuth();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [postData, setPostData] = useState<PostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    weight: "",
    title: "",
    location: "",
    gender: "",
    description: "",
    breed: "",
    profileImage: null,
  });

  useEffect(() => {
    const fetchPostById = async () => {
      if (!postId) return;

      try {
        const response = await axios.get(
          `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/getPostById/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setPostData(response.data.data);

        if (response.data.data.profileImage) {
          setImageUrl(response.data.data.profileImage);
        }

        setFormData({
          name: response.data.data.name,
          age: response.data.data.age,
          weight: response.data.data.weight,
          title: response.data.data.title,
          location: response.data.data.location,
          gender: response.data.data.gender,
          description: response.data.data.description,
          breed: response.data.data.breed,
          profileImage: null,
        });
      } catch (error) {
        console.error("Error fetching post data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostById();
  }, [postId, token]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, profileImage: file }));

      // Create and set the preview URL for the new image
      const previewUrl = URL.createObjectURL(file);
      setImageUrl(previewUrl);

      // Clean up the previous preview URL to avoid memory leaks
      return () => URL.revokeObjectURL(previewUrl);
    }
  };

  const handleUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        form.append(key, value as string | Blob);
      }
    });

    try {
      const response = await axios.put(
        `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/updatePost/${postId}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post");
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" mt={4}>
        Edit Post
      </Typography>
      <Box component="form" onSubmit={handleUpdatePost}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              inputProps={{ maxLength: 12 }}
            />
            <TextField
              label="Age"
              name="age"
              fullWidth
              type="number"
              margin="normal"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Weight"
              name="weight"
              fullWidth
              margin="normal"
              value={formData.weight}
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
            />
            <TextField
              label="Title"
              name="title"
              fullWidth
              margin="normal"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              inputProps={{ maxLength: 12 }}
            />
          </Grid>
        </Grid>

        <TextField
          label="Location"
          name="location"
          fullWidth
          margin="normal"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
        <TextField
          select
          label="Gender"
          margin="normal"
          fullWidth
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <TextField
          label="Breed"
          name="breed"
          fullWidth
          margin="normal"
          value={formData.breed}
          onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
        />
        <Button variant="contained" component="label" fullWidth sx={{ my: 2 }}>
          Upload Profile Image
          <input
            type="file"
            hidden
            onChange={handleFileChange}
            accept="image/*"
          />
        </Button>
        {imageUrl && (
          <Box mt={2}>
            <Typography variant="h6">Current Profile Image:</Typography>
            <Box
              sx={{
                position: "relative",
                width: "200px",
                height: "200px",
                margin: "0 auto",
              }}
            >
              <Image
                src={imageUrl}
                alt="Profile Image"
                fill
                style={{ objectFit: "cover" }}
                unoptimized={imageUrl.startsWith("blob:")}
              />
            </Box>
          </Box>
        )}
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 2, mb: 4 }}
        >
          Update Post
        </Button>
      </Box>
    </Container>
  );
};

export default EditPost;
