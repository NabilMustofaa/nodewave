import React from "react";
import WorkItem from "./WorkItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";

// or only core styles
import "@splidejs/splide/css/core";

export default function WorkSlider({ works }) {
  return (
    <div className="">
      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 1.5,
          gap: "-12vw",
          focus: "center",
          arrows: false,
          pagination: false,
        }}
      >
        {works.map((work) => (
          <SplideSlide>
            <WorkItem {...work} key={work.id} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
