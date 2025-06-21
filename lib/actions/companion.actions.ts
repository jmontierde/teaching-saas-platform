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

export const getAllCompanion = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllCompanions) => {
  const supabase = createSupabaseClient();

  let query = supabase.from("companions").select("*", { count: "exact" });

  if (subject && topic) {
    query = query
      .ilike("subject", `%${subject}%`)
      .or(`topic.ilike.%${topic}%, name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%, name.ilike.%${topic}%`);
  }

  query.range((page - 1) * limit, page * limit - 1);

  const { data: companions, error, count } = await query;

  if (error) {
    throw new Error(`Error getting companions: ${error.message}`);
  }

  return {
    companions,
    count,
  };
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
