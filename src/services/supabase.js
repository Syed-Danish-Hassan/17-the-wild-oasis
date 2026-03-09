import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wpbxrrxxrqjfshwaytew.supabase.co";
const supabaseKey = "sb_publishable_NHYqMJr_Gks-BONulJW1ug_ReXrgHit";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
