import { IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ searchToNav }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="searchBarContainer">
      <input
        className="searchBar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="searchButtonContainer">
        {searchTerm !== "" && (
          <div
            role="button"
            data-testid="closeButton"
            onClick={() => {
              searchToNav("");
              setSearchTerm("");
            }}
          >
            <IconX />
          </div>
        )}
        <div
          role="button"
          data-testid="searchButton"
          onClick={() => searchToNav(searchTerm)}
        >
          <IconSearch />
        </div>
      </div>
    </section>
  );
};
