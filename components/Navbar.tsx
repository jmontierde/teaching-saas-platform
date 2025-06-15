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

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/">Logo</Link>
      <div className="flex gap-8 items-center cursor-pointer">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <Button variant="outline" className="text-white">
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
