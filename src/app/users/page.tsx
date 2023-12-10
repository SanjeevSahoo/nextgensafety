import React, { Suspense } from "react";
import SearchBar from "./SearchBar";
import TableSection from "./TableSection";

const UsersPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const searchText = searchParams?.query || "";

  return (
    <div className="grid grid-rows-[1fr_auto] w-[800px] m-auto border-[1px] bg-cyan-50 p-2">
      <SearchBar />
      <Suspense fallback={<div>Loading...</div>} key={searchText}>
        <TableSection searchText={searchText} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
