import logo from "../../images/moonpig-logo-thumb.png";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { ColouredLine } from "../ColouredLine/ColouredLine";
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
    <div>
      <header>
        <div className="logoContainer" onClick={() => navigate("/")}>
          <img className="logo" src={logo} alt="Moonpig logo" />
        </div>
        {hasSearch && (
          <div className="searchContainer">
            <SearchBar searchToNav={searchToNav} />
          </div>
        )}
        {hasRoute && (
          <div className="routePath">
            <Link className="link" to="/">
              All Cards
            </Link>
            <IconChevronRight /> {item["Title"]}
          </div>
        )}
      </header>
      <ColouredLine colour="#273963" />
    </div>
  );
};
