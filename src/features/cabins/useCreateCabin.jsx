import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    /// compare it with delete mutation, interesting
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created.");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      //reset();
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreating, createCabin };
}
