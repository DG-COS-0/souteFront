import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setToken } = useAuth();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      setToken("");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}
