import React from "react";
import FeatureTitle from "./FeatureTitle";

interface FeatureItemProps {
  title: string;
  icon: string;
  description?: string | null;
  points?: string[];
}

export default function FeatureItem({
  title,
  icon,
  description = null,
  points = [],
}: FeatureItemProps) {
  return (
    <div className="flex flex-col text-white lg:w-1/3 mt-4">
      <FeatureTitle title={title} icon={icon} />
      <p className="mx-2 my-4">{description}</p>
      <ul className="list-disc mx-8">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
