import axios from "axios";

export const register = async (data: {
  email: string;
  firstName: string;
  password: string;
}) => {
  return axios.post(
    `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/register`,
    data
  );
};

export const login = async (data: { email: string; password: string }) => {
  return axios.post(
<<<<<<< HEAD
    `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/login`,
=======
    `http://127.0.0.1:5001/emerald-eon-438919-g7/us-central1/api/login`,
    // `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/login`,
>>>>>>> 603559243827d0f8d3879ecee671eccedc731cab
    data
  );
};

export const getAllPosts = async () => {
  const response = await axios.get(
    `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/getAllPosts`
  );
  return response.data;
};

export const getAllPostsByUserId = async (userId: string) => {
  const response = await axios.get(
    `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/getPosts/${userId}`
  );
  return response.data;
};

export const createPost = async (petData: any) => {
  const response = await axios.post(
    `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/createPost`,
    petData
  );
  return response.data;
};

export const deletePostById = async (postId: string) => {
  try {
    const response = await axios.delete(
      `https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/api/deletePost/${postId}`
    );
    console.log(response.data.message);
    return response.data.message;
  } catch (error: any) {
    console.error("Error deleting post:", error);
    throw new Error(error.response?.data?.message || "Failed to delete post");
  }
};
