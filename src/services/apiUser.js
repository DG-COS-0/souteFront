import axios from "axios";
import { apiBaseURL } from "./apiRest";

export async function getAllUsers(token) {
  console.log("yo man 2");

  const { data, error } = await axios.get(`${apiBaseURL}/users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}
