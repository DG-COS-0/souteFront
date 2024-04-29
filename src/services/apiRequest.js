import axios from "axios";
import { apiBaseURL } from "./apiRest";

export async function createRequestToFamily(familyId, requestInfo, token) {
  const { data, error } = await axios.post(
    `${apiBaseURL}/family/${familyId}/requests`,
    requestInfo,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (error) throw new Error(error.message);
  return data;
}
export async function getAllRequests(familyId) {
  const { data, error } = await axios.get(
    `${apiBaseURL}/family/${familyId}/requests`
  );
  if (error) throw new Error(error.message);
  return data;
}
