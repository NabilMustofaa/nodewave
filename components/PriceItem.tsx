import React from "react";
import Image from "next/image";

interface PriceItemProps {
  title: string;
  price: number;
  discount: number;
  image: string;
}

function formatPrice(price: number) {
  return `Rp, ${price.toLocaleString("id-ID")}`;
}

export default function PriceItem({
  title,
  price,
  discount,
  image,
}: PriceItemProps) {
  return (
    <div className="flex flex-row bg-white lg:w-5/12 justify-between rounded-xl">
      <div className="flex flex-col px-8 text-center justify-between w-7/12 py-9">
        <h2 className="font-semibold text-4xl mb-5">{title}</h2>

        {discount !== 0 ? (
          <div className="relative">
            <h2 className="font-semibold text-2xl">Start From</h2>
            <div className="relative w-fit mx-auto">
              <p className="">{formatPrice(price)}</p>
              <div className="flex flex-row absolute top-0">
                <div className="border border-red-500 w-32 my-auto h-0"></div>
                <Image
                  src={"/img/fontisto_shopping-sale.png"}
                  width={20}
                  height={20}
                  alt=""
                  className=""
                />
              </div>
            </div>

            <p className="font-medium text-lg">
              {formatPrice((price * discount) / 100)}
            </p>
          </div>
        ) : (
          <div className="">
            <h2 className="font-semibold text-2xl">Start From</h2>
            <p className="font-medium text-lg">{formatPrice(price)}</p>
          </div>
        )}
        <button className="bg-teal-500 px-7 py-3 rounded-full w-fit mx-auto text-white font-medium mt-12">
          Order Now
        </button>
      </div>
      <Image
        src={image}
        width={242}
        height={338}
        alt=""
        className="object-cover rounded-r-xl w-5/12 h-84"
      />
    </div>
  );
}
