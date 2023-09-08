import React from "react";

export default function HeroBackground() {
  return (
    <div>
      <div className="bg-hero-background bg-cover bg-no-repeat h-full w-2/3 absolute right-0 top-0"></div>
      <div className=" bg-gradient-to-b from-transparent to-black absolute bottom-0 w-full h-1/2"></div>
    </div>
  );
}
