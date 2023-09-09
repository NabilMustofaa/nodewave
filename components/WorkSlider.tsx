import React from "react";
import WorkItem from "./WorkItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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
    <div className="">
      <div className="lg:block hidden">
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
            <SplideSlide key={work.id}>
              <WorkItem {...work} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="flex flex-col gap-8 lg:hidden ">
        {works.map((work) => (
          <WorkItem {...work} key={work.id} />
        ))}
      </div>
    </div>
  );
}
