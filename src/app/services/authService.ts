import axios from "axios";

export const register = async (data: {
  email: string;
  firstName: string;
  password: string;
}) => {
  return axios.post(`https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/addUser`, data);
};

export const login = async (data: { email: string; password: string }) => {
  return axios.post(`https://us-central1-emerald-eon-438919-g7.cloudfunctions.net/loginUser`, data);
};
