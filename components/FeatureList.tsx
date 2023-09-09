import React from "react";
import FeatureItem from "./FeatureItem";
import FeatureTitle from "./FeatureTitle";

interface Feature {
  title: string;
  icon: string;
  description?: string | null;
  points?: string[];
}

interface FeatureListProps {
  features: Feature[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between">
        {features.map((feature) =>
          feature.description !== undefined ? (
            <FeatureItem key={feature.title} {...feature} />
          ) : null
        )}
      </div>
      <div className="flex lg:flex-row flex-col flex-wrap justify-between my-16">
        {features.map((feature) =>
          feature.description === undefined ? (
            <FeatureTitle key={feature.title} {...feature} />
          ) : null
        )}
        <p className="font-semibold text-xl text-white my-auto ms-5">
          and many others
        </p>
      </div>
    </div>
  );
}
