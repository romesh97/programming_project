"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useAuth } from "@/app/context/authContext";
import Image from "next/image";

interface FormData {
  name: string;
  age: string;
  weight: string;
  title: string;
  location: string;
  gender: string;
  contact: string;
  breed: string;
  profileImage: File | null;
}

const CreatePost: React.FC = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    weight: "",
    title: "",
    location: "",
    gender: "",
    contact: "",
    breed: "",
    profileImage: null,
  });

  // State for the image preview
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFormData({ ...formData, profileImage: file });

      // Create a preview URL for the uploaded image
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value as string | Blob);
    });

    try {
      const response = await axios.post(
        "https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/createPost",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      router.push("/profile");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Create Pet Post
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={formData.name}
                inputProps={{ maxLength: 12 }}
              />
              <TextField
                required
                label="Age"
                name="age"
                type="number"
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={formData.age}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Weight"
                name="weight"
                type="number"
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={formData.weight}
              />
              <TextField
                required
                label="Title"
                name="title"
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={formData.title}
                inputProps={{ maxLength: 12 }}
              />
            </Grid>
          </Grid>

          <TextField
            required
            label="Location"
            name="location"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.location}
          />

          <TextField
            required
            select
            name="gender"
            label="Gender"
            margin="normal"
            fullWidth
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            required
            label="Contact Number"
            name="contact"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.contact}
          />
          <TextField
            required
            label="Breed"
            name="breed"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.breed}
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ my: 2 }}
          >
            Upload Profile Image
            <input type="file" hidden onChange={handleFileChange} />
          </Button>

          {imagePreview && (
            <Box mt={2}>
              <Typography variant="h6">Image Preview:</Typography>
              <Image
                src={imagePreview}
                alt="Image Preview"
                width="200"
                height="200"
                style={{ maxHeight: "200px" }}
              />
            </Box>
          )}
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 2, mb: 4 }}
          >
            Create Post
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreatePost;
