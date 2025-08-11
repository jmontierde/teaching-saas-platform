"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
const SearchInput = () => {
  const [search, setSearch] = React.useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("topic") || "";

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let currentPathname;

      if (search) {
        currentPathname = `${pathname}?topic=${search}`;
      } else {
        currentPathname = pathname;
      }

      router.push(currentPathname);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div>
      <Input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default SearchInput;
