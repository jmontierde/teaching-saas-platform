import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/">Logo</Link>
      <div className="flex gap-8 items-center cursor-pointer">
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
