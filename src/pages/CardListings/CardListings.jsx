import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconSearch, IconX } from "@tabler/icons-react";
import { Modal } from "@mantine/core";
import "./CardListings.css";
import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import { ModalCarousel } from "../../components/ModalCarousel/ModalCarousel";
import { ColouredLine } from "../../components/ColouredLine/ColouredLine";
import { NavBar } from "../../components/NavBar/NavBar";

export const CardListings = () => {
  const TRANSITION_DURATION = 1000;

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [updateSearch, setUpdateSearch] = useState("");
  const [currentItem, setCurrentItem] = useState([]);
  const [opened, setOpened] = useState(false);

  const navToCards = (searchData) => {
    setUpdateSearch(searchData);
  };

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
      <NavBar
        item={currentItem}
        hasSearch={true}
        hasRoute={false}
        navToCards={navToCards}
      />
      {/* <div className="searchBarContainer">
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
      <ColouredLine colour="blue" /> */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered={true}
        xOffset={0}
        yOffset={0}
        size={"lg"}
      >
        <div className="modalContainer">
          <ModalCarousel
            moonpigProductNo={currentItem["MoonpigProductNo"]}
            TRANSITION_DURATION={TRANSITION_DURATION}
          />
          <div className="modalButtonContainer">
            <Button
              label="View Details"
              onClick={() =>
                navigate("/details", { state: { item: currentItem } })
              }
            />
          </div>
        </div>
      </Modal>
      <div className="cardsContainer">
        {data.map(
          (item) =>
            item["Title"]
              .toLowerCase()
              .includes(updateSearch.toLowerCase()) && (
              <div
                className="cardImage"
                key={item["ProductId"]}
                onClick={() => {
                  setOpened(true);
                  setCurrentItem(item);
                }}
              >
                <Card
                  src={item["ProductImage"]["Link"]["Href"]}
                  alt={item["ProductImage"]["Link"]["Title"]}
                  width={225}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};
