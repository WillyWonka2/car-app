"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
