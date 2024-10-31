"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
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
  description: string;
  breed: string;
  profileImage: File | null;
}

const CreatePost: React.FC = () => {
  const { token } = useAuth();
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
        "http://127.0.0.1:5001/emerald-eon-438919-g7/us-central1/api/createPost",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
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
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.name}
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.age}
          />
          <TextField
            label="Weight"
            name="weight"
            type="number"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.weight}
          />
          <TextField
            label="Title"
            name="title"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.title}
          />
          <TextField
            label="Location"
            name="location"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.location}
          />
          <TextField
            label="Gender"
            name="gender"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.gender}
          />
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.description}
          />
          <TextField
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
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Create Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;
