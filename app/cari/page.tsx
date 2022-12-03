"use client";
import React, { useState } from "react";
import SectionResult from "./sectionResult";
export default function Cari() {
  const [query, setQuery] = useState("");
  const onSearch = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" placeholder="cari orang" />
        <button type="submit">cari</button>
      </form>
      {/* {"Mencari :" + query} */}
      {query && <SectionResult query={query} />}
      {/* // jika query tidak kosong
      maka tampilkan data */}
    </div>
  );
}
