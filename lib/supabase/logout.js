import { redirect } from "next/navigation";
import { createClient } from "./client";

export async function logout() {
  const supabase = createClient();

   
  const { error } = await supabase.auth.signOut();

  
   
}
