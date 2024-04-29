import axios from "axios";
import { apiBaseURL } from "./apiRest";

export async function login({ email, password }) {
  const { data, error } = await axios.post(`${apiBaseURL}/users/login`, {
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function logout() {
  const { data, error } = await axios.get(`${apiBaseURL}/users/logout`);
  if (error) throw new Error(error.message);
  return data;
}
export async function signup({
  surName,
  sexe,
  firstNames,
  email,
  password,
  passwordConfirmation,
}) {
  const { data, error } = await axios.post(`${apiBaseURL}/users/signup`, {
    surName,
    sexe,
    firstNames,
    email,
    password,
    passwordConfirmation,
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function getCurrentUser(token) {
  if (!token) throw new Error(`Veuillez vous authentifié`);

  const { data, error } = await axios.get(`${apiBaseURL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (error) throw new Error(error.message);
  return data.data.data;
}
