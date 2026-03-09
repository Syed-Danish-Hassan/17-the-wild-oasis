import supabase, { supabaseUrl } from "./supabase";

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

export async function createCabin(cabinData) {
  const imageName = `${Math.random()}-${cabinData.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //https://wpbxrrxxrqjfshwaytew.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  // 1. create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert({ ...cabinData, image: imagePath });

  if (error) {
    console.error("Error creating cabin:", error);
    throw new Error("Failed to create cabin");
  }
  // 2. upload image
  //const avatarFile = event.target.files[0];
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinData.image);

  // 3. delete the cabin if there was an error in uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error("Error storing cabin image: ", error);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }
  return data;
}
