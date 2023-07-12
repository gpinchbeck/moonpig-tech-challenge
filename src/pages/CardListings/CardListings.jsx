import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconSearch, IconX } from "@tabler/icons-react";

import "./CardListings.css";
import { Card } from "../../components/Card/Card";

export const CardListings = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [updateSearch, setUpdateSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await (
        await fetch("https://moonpig.github.io/tech-test-frontend/search.json")
      ).json();

      console.log(data);

      setData(data["Products"]);
    };

    getData();
  }, []);

  return (
    <div>
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
                  setUpdateSearch("");
                  setSearchTerm("");
                }}
              >
                <IconX />
              </div>
            )}
            <div onClick={() => setUpdateSearch(searchTerm)}>
              <IconSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="cardsContainer">
        {data.map(
          (item) =>
            item["Title"]
              .toLowerCase()
              .includes(updateSearch.toLowerCase()) && <Card item={item} />
        )}
      </div>
    </div>
  );
};
