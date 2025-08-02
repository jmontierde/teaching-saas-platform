import CompanionForm from "@/components/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg-[50px] min-md:w-2/3 flex items-center justify-center">
      {canCreateCompanion ? (
        <article className="flex flex-col gap-4 w-full">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src="/images/limit.svg"
            alt="Companion Limit Reached"
            width={360}
            height={360}
          />
          <div className="cta-badge">Upgrade your plan</div>
          <h1>You've Reached Your Limit</h1>
          <p>
            You've reached your companion limit. Upgrade to create more
            companions and premium features.
          </p>
          <Link
            href="/subscription"
            className="bg-black text-white rounded-xl cursor-pointer px-4 py-2 flex items-center gap-2 w-full justify-center"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
