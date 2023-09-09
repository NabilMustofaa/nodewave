import React from "react";
import Image from "next/image";
export default function Workflow() {
  return (
    <div className=" bg-work-background w-screen bg-cover mt-8 lg:-mx-20 -mx-16 flex flex-col align-middle py-8">
      <h2 className="font-semibold text-4xl text-white text-center mb-16">
        How We Works
      </h2>
      <div className="lg:w-1/2 w-2/3 bg-flow-background mx-auto p-8 rounded-xl flex lg:flex-row flex-col gap-14">
        <Image
          src={"/img/chat.png"}
          width={290}
          height={445}
          alt=""
          className="h-[28rem] w-72 mx-auto"
        />
        <div className="flex flex-col text-white gap-3 lg:mt-12">
          <p className="font-semibold text-xl">Estimate</p>
          <p className="text-xl">
            Estimate the cost of creating your application with us. Pricing is
            transparent at the start with a gradual payment method.
          </p>
        </div>
      </div>
    </div>
  );
}
