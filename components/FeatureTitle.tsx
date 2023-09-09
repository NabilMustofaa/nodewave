import React from "react";
import Image from "next/image";

interface FeatureTitleProps {
  title: string;
  icon: string;
}

export default function FeatureTitle({ title, icon }: FeatureTitleProps) {
  return (
    <div className="flex flex-row gap-3">
      <Image src={icon} width={50} height={50} alt="" />
      <p className="font-semibold text-xl text-white my-auto">{title}</p>
    </div>
  );
}
