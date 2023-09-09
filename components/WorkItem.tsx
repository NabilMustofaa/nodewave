import React from "react";
import Image from "next/image";

interface WorkItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  backdrop: string;
}

export default function WorkItem({
  id,
  title,
  description,
  image,
  backdrop,
}: WorkItemProps) {
  return (
    <div
      className="lg:w-11/12 w-full bg-cover rounded-xl "
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className="flex lg:flex-row flex-col gap-5 rounded-xl w-full h-full px-4 py-24  backdrop-blur">
        <Image
          src={image}
          width={557}
          height={329}
          alt=""
          className="lg:w-2/3 md:w-1/2 w-8/12 rounded-xl mx-auto"
        />
        <div className="flex flex-col text-center text-white gap-4">
          <h2 className="font-medium text-4xl">{title}</h2>
          <p className="text-xl leading-normal lg:text-left text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
