import axios from "axios";
import { apiBaseURL } from "./apiRest";

export async function createNewFamily(familyInfo, token) {
  console.log(familyInfo);

  console.log(token);

  const { data, error } = await axios
    .post(`${apiBaseURL}/family/`, familyInfo, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => console.log(err));

  if (error) throw new Error(error);
  return data;
}
export async function getAllFamilies(page) {
  if (!page) page = 1;
  const { data, error } = await axios.get(`${apiBaseURL}/family?page=${page}`);

  if (error) {
    throw new Error(error.message);
  }
  // console.log(data.data);
  return data;
}
export async function getOneFamily(familyId) {
  const { data, error } = await axios.get(`${apiBaseURL}/family/${familyId}`);

  if (error) throw new Error(error.message);

  return data;
}
