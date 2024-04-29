import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (userData) => {
      setToken(userData.token);
      setUser(userData.user);
      localStorage.setItem("user", JSON.stringify(userData.data.user));
      localStorage.setItem("token", userData.token);
      toast.success(
        "Nouveau compte créé avec succès. Veuillez verifier votre mail pour valider la creation"
      );
    },
  });

  return { signup, isLoading };
}
