import axios from "axios";

export const register = async (data: {
  email: string;
  firstName: string;
  password: string;
}) => {
  return axios.post(
    `http://127.0.0.1:5001/emerald-eon-438919-g7/us-central1/api/register`,
    data
  );
};

export const login = async (data: { email: string; password: string }) => {
  return axios.post(
    `http://127.0.0.1:5001/emerald-eon-438919-g7/us-central1/api/login`,
    data
  );
};

export const getAllPosts = async () => {
  const response = await axios.get(
    `http://127.0.0.1:5001/emerald-eon-438919-g7/us-central1/api/getAllPosts`
  );
  return response.data;
};

export const getAllPostsByUserId = async (userId: string) => {
  const response = await axios.get(
    `http://127.0.0.1:5001/emerald-eon-438919-g7/us-central1/api/getPosts/${userId}`
  );
  return response.data;
};

export const createPost = async (petData: any) => {
  const response = await axios.post(
    `http://127.0.0.1:5001/emerald-eon-438919-g7/us-central1/api/createPost`,
    petData
  );
  return response.data;
};
