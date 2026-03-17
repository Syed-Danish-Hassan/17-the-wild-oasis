import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (cabinId) => deleteCabinApi(cabinId),
    onSuccess: () => {
      // Invalidate and refetch
      //// alert("Cabin deleted successfully!");
      toast.success("Cabin deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => {
      console.error("Error deleting cabin:", error);
      toast.error("Failed to delete cabin. Please try again.", error.message);
      //alert("Failed to
      //  delete cabin. Please try again.", error.message);
    },
  });

  return { isDeleting, deleteCabin };
}
