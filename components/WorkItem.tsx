import React from "react";
import Image from "next/image";

export default function WorkItem({ id, title, description, image, backdrop }) {
  return (
    <div
      className="w-9/12 h-[32.5rem] bg-cover rounded-xl "
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className="flex flex-row gap-5 rounded-xl w-full h-full px-4 py-24  backdrop-blur">
        <Image
          src={image}
          width={557}
          height={329}
          alt=""
          className=" w-8/12 rounded-xl"
        />
        <div className="flex flex-col text-center text-white gap-4">
          <h2 className=" font-medium text-4xl">{title}</h2>
          <p className="  text-xl text-left leading-normal">{description}</p>
        </div>
      </div>
    </div>
  );
}
