"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: "home-icon", // Replace with actual icon component or class
  },
  {
    name: "Companions",
    href: "/companions",
    icon: "companion-icon", // Replace with actual icon component or class
  },
  {
    name: "New Companion",
    href: "/companions/new",
    icon: "new-companion-icon", // Replace with actual icon component or class
  },
  {
    name: "My Journey",
    href: "/my-journey",
    icon: "myjourney", // Replace with actual icon component or class
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-8 items-center cursor-pointer">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={
            "flex items-center gap-2" +
            (pathname === item.href
              ? " text-blue-500 font-semibold"
              : " text-gray-700") +
            " hover:text-blue-500"
          }
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
