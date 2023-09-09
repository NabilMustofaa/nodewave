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
interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  backdrop: string;
}

interface WorkSliderProps {
  works: Work[];
}

export default function WorkSlider({ works }: WorkSliderProps) {
  return (
    <>
      <div className="w-screen lg:block hidden">
        <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 1.2,
            gap: "1rem",
            focus: "center",
            arrows: false,
            pagination: false,
          }}
        >
          {works.map((work) => (
            <SplideSlide key={work.id}>
              <WorkItem {...work} key={work.id} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="flex flex-col gap-8 lg:hidden ">
        {works.map((work) => (
          <WorkItem {...work} key={work.id} />
        ))}
      </div>
    </>
  );
}
