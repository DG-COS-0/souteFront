import { useQuery } from "@tanstack/react-query";

import { useAuth } from "../../context/authContext";
import { getAllUsers } from "../../services/apiUser";

export function useUsers() {
  console.log("yo man 1");
  const { token } = useAuth() || { token: localStorage.getItem("token") };
  const {
    isPending: isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(token),
  });
  console.log(users);
  return { isLoading, users };
}
