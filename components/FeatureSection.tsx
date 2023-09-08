import React from "react";
import FeatureList from "./FeatureList";

export default function FeatureSection() {
  const features = [
    {
      id: 1,
      title: "Online Attendance",
      icon: "img/material-symbols_list.svg",
      description:
        "With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as ",
      points: [
        "Clock in and Clock Out attendance",
        "Face Photo Face Recognition",
        "Accurate time stamp down to seconds",
        "GPS location of employees",
      ],
    },
    {
      id: 2,
      icon: "img/fluent_sport-basketball-20-regular.svg",
      title: "Online Attendance",
      description:
        "Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to",
      points: [
        "Choose a booking schedule",
        "Online payments",
        " Automatic scheduling system",
        " Search for Friends feature",
        "Split Payment with team members",
        "Split Payment with team members",
      ],
    },
    {
      id: 3,
      icon: "img/ph_book-bold.svg",
      title: "Booking",
      description:
        "Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:",
      points: [
        "Memilih jenis dan kategori jasa yang dikehendaki",
        "Melakukan reservasi online dan pembayaran dengan metode pembayaran digital",
        "Penjadwalan dengan tim lapangan",
        "Aplikasi khusus untuk tim",
        "Promosi dan Kode voucher khusus",
      ],
    },
    {
      id: 4,
      icon: "img/ant-design_shop-outlined.svg",
      title: "E-Commerce",
    },
    {
      id: 5,
      icon: "img/mdi_company.svg",
      title: "Company Profile",
    },
    {
      id: 6,
      icon: "img/streamline_money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine.svg",
      title: "Cashier",
    },
    {
      id: 7,
      icon: "img/ph_chat-bold.svg",
      title: "Chat",
    },
    {
      id: 8,
      icon: "img/fluent-emoji-high-contrast_man-mechanic.svg",
      title: "Workshop",
    },
    {
      id: 9,
      icon: "img/healthicons_construction-outline.svg",
      title: "Construction",
    },
  ];
  return (
    <div className=" mx-20">
      <h2 className="font-semibold text-4xl text-white text-center mb-20">
        Applications that can be made
      </h2>
      <FeatureList features={features} />
    </div>
  );
}
