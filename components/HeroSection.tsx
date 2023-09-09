import React from "react";
import Image from "next/image";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <div className="h-screen relative flex align-middle overflow-x-hidden -mx-16 sm:mt-0 pt-8 z-0">
      <HeroBackground />
      <div className=" flex flex-col xl:w-2/3 w-full relative text-white gap-6 my-auto mx-24">
        <div className="relative">
          <Image
            src={"img/mdi_head-idea.svg"}
            width={61}
            height={61}
            className="absolute bottom-0 md:left-96 right-8 pointer-events-none"
            alt=""
          ></Image>
          <Image
            src={"img/ph_code-bold.svg"}
            width={37}
            height={37}
            className="absolute -left-5 -top-10 pointer-events-none"
            alt=""
          ></Image>
          <h1 className=" font-semibold text-5xl leading-normal">
            Make Your Own <br /> Website and Mobile Application <br />
            With Nodewave
          </h1>
        </div>

        <div className="">
          <button className=" py-2 px-4 bg-teal-500 rounded-full font-semibold text-xl">
            Get Started Now
          </button>
        </div>
        <p className=" text-2xl">
          Create Mobile Applications and Websites for Companies or Your Business{" "}
          <br /> Have a transparent pricing, easy and straightforward
          development process
        </p>
      </div>
    </div>
  );
}
