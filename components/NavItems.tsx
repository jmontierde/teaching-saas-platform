"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: "home-icon",
  },
  {
    name: "Companions",
    href: "/companions",
    icon: "companion-icon",
  },
  {
    name: "New Companion",
    href: "/companions/new",
    icon: "new-companion-icon",
  },
  {
    name: "My Journey",
    href: "/my-journey",
    icon: "myjourney",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-3 lg:gap-8 items-center cursor-pointer">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={
            "flex items-center gap-2 text-xs lg:text-base" +
            (pathname === item.href
              ? " text-[#fe5933] font-semibold"
              : " text-gray-700") +
            " hover:text-[#fe5933]"
          }
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
