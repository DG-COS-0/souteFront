import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewFamily as createFamilyApi } from "../../services/apiFamily";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateFamily() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createFamily, isPending: isLoading } = useMutation({
    mutationFn: ({ familyInfo, token }) => createFamilyApi(familyInfo, token),
    onSuccess: () => {
      toast.success("Nouvelles familles créé avec succès");
      queryClient.invalidateQueries({ queryKey: ["families"] });

      navigate("/dashboard");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, createFamily };
}
