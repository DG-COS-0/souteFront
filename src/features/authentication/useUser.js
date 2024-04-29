import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useAuth } from "../../context/authContext";

export function useUser() {
  const { token } = useAuth() || { token: localStorage.getItem("token") };

  const { isPending: isLoading, data: user } = useQuery({
    queryKey: ["user", token],
    queryFn: () => getCurrentUser(token),
  });

  return { isLoading, user };
}
