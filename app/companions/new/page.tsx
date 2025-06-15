import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const NewCompanion = async () => {
  return (
    <main className="min-lg-[50px] min-md:w-2/3 flex items-center justify-center">
      <article className="flex flex-col gap-4 w-full">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
