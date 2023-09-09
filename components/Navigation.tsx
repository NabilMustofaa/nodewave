import React, { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-row justify-between px-4 md:px-16 py-7 absolute top-0 w-screen z-10 ">
      <div className="">
        <Image
          src={"/img/logo.png"}
          width={226}
          height={44}
          className="w-56"
          alt=""
        />
      </div>
      <div className="lg:flex hidden justify-between text-white text-xl gap-7 align-middle h-full">
        <a href="" className="py-3">
          Website
        </a>
        <a href="" className="py-3">
          Mobile Apps
        </a>
        <a href="" className="py-3">
          Portfolio
        </a>
        <a href="" className="px-5 py-3 bg-teal-500 rounded-full">
          Make an App
        </a>
      </div>
      <div className="lg:hidden flex">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <Image src={"img/menu.svg"} width={30} height={30} alt="" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-28 right-0 left-0 bg-black z-20 text-white">
          <a href="" className="block px-5 py-3 ">
            Website
          </a>
          <a href="" className="block px-5 py-3 ">
            Mobile Apps
          </a>
          <a href="" className="block px-5 py-3 ">
            Portfolio
          </a>
          <a href="" className="block px-5 py-3 bg-teal-500 text-white">
            Make an App
          </a>
        </div>
      )}
    </div>
  );
}
