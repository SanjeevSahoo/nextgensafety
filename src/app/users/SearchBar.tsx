"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params}`);
  }, 300);
  return (
    <div className="w-full p-2">
      <input
        type="text"
        placeholder="Search by User Name"
        className="w-full p-2 rounded-sm"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
