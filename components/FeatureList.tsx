import React from "react";
import FeatureItem from "./FeatureItem";
import FeatureTitle from "./FeatureTitle";

export default function FeatureList({ features }) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        {features.map((feature) =>
          feature.description !== undefined ? (
            <FeatureItem {...feature} />
          ) : null
        )}
      </div>
      <div className="flex flex-row justify-between my-16">
        {features.map((feature) =>
          feature.description === undefined ? (
            <FeatureTitle {...feature} />
          ) : null
        )}
        <p className=" font-semibold text-xl text-white my-auto">
          and many others
        </p>
      </div>
    </div>
  );
}
