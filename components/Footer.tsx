import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-screen bg-black border border-black pb-11 pt-20 text-white">
      <div className="flex flex-col lg:w-1/4 mx-auto">
        <Image
          src={"/img/logo.png"}
          width={226}
          height={44}
          alt=""
          className="mx-auto"
        />
        <p className=" font-semibold text-xl text-center my-8">
          PT NODEWAVE SOLUSI TEKNOLOGI
        </p>
        <p className=" font-semibold text-xl text-center my-3">
          Graha Pena Surabaya <br />
          Jl. Ahmad Yani no. 88 Surabaya <br />
          Phone : +62811258280 <br />
          Email : support@nodewave.id
        </p>
        <div className="flex flex-row mt-11 justify-between lg:mx-28 mx-80">
          <Image
            src={"img/ic_baseline-facebook.svg"}
            width={30}
            height={30}
            alt=""
          />
          <Image src={"img/mdi_twitter.svg"} width={30} height={30} alt="" />
          <Image src={"img/mdi_youtube.svg"} width={30} height={30} alt="" />
          <Image src={"img/mdi_linkedin.svg"} width={30} height={30} alt="" />
          <Image
            src={"img/ri_instagram-fill.svg"}
            width={30}
            height={30}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
