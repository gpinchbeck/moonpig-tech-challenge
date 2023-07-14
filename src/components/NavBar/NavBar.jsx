import logo from "./../../images/moonpig-logo-thumb.png";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "./../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { ColouredLine } from "./../ColouredLine/ColouredLine";
import { IconChevronRight } from "@tabler/icons-react";
import "./NavBar.css";

export const NavBar = ({ item, hasSearch, hasRoute, navToCards }) => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const searchToNav = (searchData) => {
    setData(searchData);
  };

  useEffect(() => {
    if (navToCards !== undefined) {
      navToCards(data);
    }
  }, [navToCards, data]);

  return (
    <header>
      <nav>
        <figure className="logoContainer" onClick={() => navigate("/")}>
          <img className="logo" src={logo} alt="Moonpig logo" />
        </figure>
        {hasSearch && (
          <div className="searchContainer" role="search">
            <SearchBar searchToNav={searchToNav} data-testid="searchBar" />
          </div>
        )}
        {hasRoute && (
          <span className="routePath">
            <Link className="link" to="/">
              All Cards
            </Link>
            <IconChevronRight /> <span className="title">{item["Title"]}</span>
          </span>
        )}
      </nav>
      <ColouredLine colour="#273963" />
    </header>
  );
};
