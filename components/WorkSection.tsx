import React from "react";
import WorkSlider from "./WorkSlider";
import Workflow from "./Workflow";

export default function WorkSection() {
  const works = [
    {
      id: 1,
      title: "Rayu Motor",
      description:
        "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales",
      image: "/img/works1.png",
      backdrop: "/img/backdrop1.jpg",
    },
    {
      id: 2,
      title: "Work 2",
      description:
        "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales",
      image: "/img/works2.png",
      backdrop: "/img/backdrop2.jpg",
    },
  ];
  return (
    <div className="mb-10">
      <h2 className="font-semibold text-4xl text-white text-center mb-4">
        Our Works
      </h2>
      <WorkSlider works={works} />
      <Workflow />
    </div>
  );
}
