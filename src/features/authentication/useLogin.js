import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/authContext";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser, setToken } = useAuth();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (userData) => {
      setToken(userData.token);
      setUser(userData.data.user);
      localStorage.setItem("user", JSON.stringify(userData.data.user));
      localStorage.setItem("token", userData.token);
      console.log(userData);
      queryClient.setQueryData(["user"], userData.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Email ou mot de passe incorrect !!!");
    },
  });

  return { login, isLoading };
}
