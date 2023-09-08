import React from "react";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className=" flex flex-row justify-between absolute px-16 py-7 top-0 w-screen z-10 ]">
      <div className="">
        <Image
          src={"/img/logo.png"}
          width={226}
          height={44}
          className=" w-56"
          alt=""
        />
      </div>
      <div className=" flex justify-between text-white text-xl gap-7 align-middle h-full">
        <a href="" className="py-3">
          Website
        </a>
        <a href="" className="py-3">
          Mobile Apps
        </a>
        <a href="" className="py-3">
          Portofolio
        </a>
        <a href="" className=" px-5 py-3 bg-teal-500 rounded-full">
          Make an App
        </a>
      </div>
    </div>
  );
}
