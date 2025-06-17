"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error) {
    throw new Error(`Error creating companion: ${error.message}`);
  }

  return data[0];
};

export const getCompanion = async () => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("author", author)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Error getting companions: ${error.message}`);
  }

  return data;
};
