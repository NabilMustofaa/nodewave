import React, { useState } from "react";
import ProductSelector from "./ProductSelector";
import ProductItem from "./ProductItem";

interface Product {
  title: string;
  description: string;
  link: string;
  icon: string;
  image: string;
}

const products: Product[] = [
  {
    title: "Mobile Apps",
    description:
      "Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.",
    link: "#",
    icon: "img/ui-design 1.svg",
    image: "/img/app.png",
  },
  {
    title: "Website",
    description:
      "Website adalah aplikasi berbasis website, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.",
    link: "#",
    icon: "img/web-design 1.svg",
    image: "/img/app.png",
  },
];

export default function ProductSection() {
  const initialProduct: Product = products[0];
  const [product, setProduct] = useState<Product>(initialProduct);

  const handleProductSelect = (selectedProduct: Product) => {
    setProduct(selectedProduct);
  };

  return (
    <div className=" pb-24 px-20">
      <h2 className="font-semibold text-4xl text-white text-center mb-10">
        Our Product
      </h2>
      <div className="flex flex-row gap-6">
        <ProductSelector
          products={products}
          onSelectProduct={handleProductSelect}
          selectedProductTitle={product.title}
        />
        <ProductItem {...product} />
      </div>
    </div>
  );
}
