import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ProductItem({ image, title, description, link }) {
  return (
    <div className="flex flex-col bg-white justify-between align-middle w-2/3 rounded-3xl p-10 text-center">
      <Image src={image} width={231} height={225} className="mx-auto" alt="" />
      <div className="flex flex-col gap-2">
        <h2 className=" font-medium text-4xl">{title}</h2>
        <p>{description}</p>
      </div>
      <Link href={link}>
        <button className="bg-teal-500 rounded-lg px-6 py-3 text-white">
          Pelajari Selengkapnya
        </button>
      </Link>
    </div>
  );
}
