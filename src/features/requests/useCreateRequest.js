import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRequestToFamily } from "../../services/apiRequest";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function useCreateRequest() {
  const { familyId } = useParams();
  const queryClient = useQueryClient();
  const { mutate: createNewRequest, isPending: isLoading } = useMutation({
    mutationFn: ({ requestInfo, token }) =>
      createRequestToFamily(familyId, requestInfo, token),
    onSuccess: () => {
      toast.success("Votre requetes a joindre la famille a été envoyer");
      queryClient.invalidateQueries({ queryKey: ["families"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, createNewRequest };
}
