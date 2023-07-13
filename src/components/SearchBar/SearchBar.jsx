import { IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ searchToNav }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="searchBarContainer">
      <div className="searchBarCont">
        <input
          className="searchBar"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="searchButtonContainer">
          {searchTerm !== "" && (
            <div
              onClick={() => {
                searchToNav("");
                setSearchTerm("");
              }}
            >
              <IconX />
            </div>
          )}
          <div onClick={() => searchToNav(searchTerm)}>
            <IconSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
