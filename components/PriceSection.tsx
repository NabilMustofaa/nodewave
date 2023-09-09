import React from "react";
import PriceItem from "./PriceItem";

export default function PriceSection() {
  const prices = [
    {
      id: 1,
      title: "Website",
      price: 1000000,
      discount: 50,
      image: "/img/website.jpg",
    },
    {
      id: 2,
      title: "Mobile",
      price: 1000000,
      discount: 0,
      image: "/img/mobile.jpg",
    },
  ];
  return (
    <div>
      <h2 className="font-semibold text-4xl text-white text-center mb-20">
        Applications that can be made
      </h2>
      <div className="flex lg:flex-row flex-col justify-center gap-24">
        {prices.map((price) => (
          <PriceItem {...price} key={price.id} />
        ))}
      </div>
    </div>
  );
}
