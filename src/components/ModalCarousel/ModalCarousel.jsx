import { Carousel, useAnimationOffsetEffect } from "@mantine/carousel";
import { useEffect, useState } from "react";
import "./ModalCarousel.css";
import { Card } from "./../Card/Card";
import {
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";

export const ModalCarousel = ({ moonpigProductNo, TRANSITION_DURATION }) => {
  const [data, setData] = useState([]);
  const [embla, setEmbla] = useState(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  useEffect(() => {
    const getData = async () => {
      const data = await (
        await fetch(
          `https://moonpig.github.io/tech-test-frontend/product/${moonpigProductNo}.json`
        )
      ).json();

      setData(data["ImageUrls"]);
    };

    getData();
  }, [moonpigProductNo]);

  const slides = data.map((url) => (
    <Carousel.Slide key={url["ImageUrl"]}>
      <Card src={url["ImageUrl"]} width={320} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      styles={{
        control: {
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
      includeGapInSize={false}
      nextControlIcon={<IconCircleArrowRightFilled width={24} height={24} />}
      previousControlIcon={<IconCircleArrowLeftFilled width={24} height={24} />}
      controlsOffset={0}
      slideSize={100}
      className="carousel"
      align="center"
      slideGap={20}
      getEmblaApi={setEmbla}
    >
      {slides}
    </Carousel>
  );
};
