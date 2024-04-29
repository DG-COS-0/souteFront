import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOneFamily } from "../../services/apiFamily";

export function useFamily() {
  const { familyId } = useParams();
  const {
    isPending: isLoading,
    data: family,
    error,
  } = useQuery({
    queryKey: ["families", familyId],
    queryFn: () => getOneFamily(familyId),
    retry: false,
  });
  return { isLoading, error, family };
}
