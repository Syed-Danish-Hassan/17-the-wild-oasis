import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  //return { cabins, error };

  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error("Failed to fetch cabins");
  } else {
    return data;
  }
}

export async function deleteCabin(cabinId) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", cabinId);

  if (error) {
    console.error("Error deleting cabin:", error);
    throw new Error("Failed to delete cabin");
  } else {
    return data;
  }
}
