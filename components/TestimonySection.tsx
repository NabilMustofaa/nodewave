import React from "react";
import TestimonyList from "./TestimonyList";

export default function TestimonySection() {
  const testimonies = [
    {
      id: 1,
      name: "Ahmad Prasetyo",
      content:
        "Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.",
    },
    {
      id: 2,
      name: "Laras Ratnadewi",
      content:
        "Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.",
    },
    {
      id: 3,
      name: "Yusuf Uwais",
      content:
        "Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!",
    },
  ];
  return (
    <div className=" mb-12 mx-12">
      <h2 className=" font-medium text-4xl text-white mb-6">Testimony</h2>
      <TestimonyList testimonies={testimonies} />
    </div>
  );
}
