import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full lg:px-12 py-6 lg:w-3/4  px-6 mx-auto text-white">
      <Link href="/" className="text-[#fe5933] text-base font-bold lg:text-2xl">
        TutorAI
      </Link>
      <div className="flex gap-8 items-center cursor-pointer">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <Button
              variant="outline"
              className="text-black hover:border-gray-300 hover:text-gray-700"
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
