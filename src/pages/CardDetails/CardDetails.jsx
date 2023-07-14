import { useLocation } from "react-router-dom";
import { Button } from "./../../components/Button/Button";
import { ModalCarousel } from "./../../components/ModalCarousel/ModalCarousel";
import "./CardDetails.css";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { NavBar } from "./../../components/NavBar/NavBar";

export const CardDetails = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [str, setStr] = useState("");

  const item = location.state.item;

  useEffect(() => {
    const getData = async () => {
      const data = await (
        await fetch(
          `https://moonpig.github.io/tech-test-frontend/product/${item["MoonpigProductNo"]}.json`
        )
      ).json();

      setData(data);
      setStr(data["Description"]);
    };

    getData();
  }, [item]);

  return (
    <main>
      <Toaster />
      <NavBar item={item} hasSearch={false} hasRoute={true} />
      <section className="detailsContainer">
        <article className="cardDetailsLeft">
          <ModalCarousel
            moonpigProductNo={item["MoonpigProductNo"]}
            TRANSITION_DURATION={1000}
          />
        </article>
        <article className="cardDetailsRight">
          <h4>{data["Title"]}</h4>
          {data !== undefined && (
            <p className="description">
              {str.toString().replaceAll(/<br \/>|<br>/g, "\n")}
            </p>
          )}
          <Button
            onClick={() =>
              toast.success("Added to basket!", { position: "bottom-center" })
            }
            label={"Buy Me"}
          />
        </article>
      </section>
    </main>
  );
};
