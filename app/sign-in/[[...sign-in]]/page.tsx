"use client";
import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url");
  return (
    <main className="flex items-center justify-center">
      <SignIn redirectUrl={redirectUrl || "/"} />
    </main>
  );
}
