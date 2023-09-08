import React from "react";
import FeatureTitle from "./FeatureTitle";

export default function FeatureItem({
  title,
  icon,
  description = null,
  points = [],
}) {
  return (
    <div className="flex flex-col text-white w-1/3">
      <FeatureTitle title={title} icon={icon} />
      <p className="mx-2 my-4">{description}</p>
      <ul className=" list-disc mx-8">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
