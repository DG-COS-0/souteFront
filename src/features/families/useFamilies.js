import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "react-router-dom";
import { getAllFamilies } from "../../services/apiFamily";

export function useFamilies() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const {
    isPending: isLoading,
    data: familiesData,
    error,
  } = useQuery({
    queryKey: ["families", page],
    queryFn: () => getAllFamilies(page),
  });
  return { isLoading, familiesData };
}
