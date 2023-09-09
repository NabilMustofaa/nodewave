import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  title: string;
  description: string;
  link: string;
  icon: string;
  image: string;
}
interface ProductSelectorProps {
  products: Product[];
  selectedProductTitle: string;
  onSelectProduct: (selectedProduct: Product) => void;
}

export default function ProductSelector({
  products,
  selectedProductTitle,
  onSelectProduct,
}: ProductSelectorProps) {
  const [matchingProduct, setMatchingProduct] = useState<Product | null>(null);

  // Use the useEffect hook to handle updates when selectedProduct changes
  useEffect(() => {
    // Find the matching product based on the selectedProduct
    const foundProduct = products.find(
      (product) => product.title === selectedProductTitle
    );

    // Update the matchingProduct state using the non-null assertion operator
    setMatchingProduct(foundProduct!);
  }, [selectedProductTitle, products]);

  const truncateDescription = (description: string) => {
    if (description.length > 100) {
      return description.slice(0, 100) + "...";
    }
    return description;
  };

  return (
    <div className="flex flex-col lg:w-1/3 w-full justify-between">
      {products.map((product) =>
        product.title === selectedProductTitle ? (
          <button
            key={product.title}
            className="bg-white rounded-3xl flex flex-row px-10 py-12 gap-6 align-bottom justify-between text-left"
            onClick={() => onSelectProduct(product)}
          >
            <Image src={product.icon} width={60} height={60} alt="" />
            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-2xl">{product.title}</h2>
              <p>{truncateDescription(product.description)}</p>
            </div>
            <Image
              src={"/img/bytesize_arrow-right.svg"}
              width={20}
              height={20}
              className="mb-0 mt-auto"
              alt=""
            />
          </button>
        ) : (
          <button
            key={product.title}
            className="border border-white text-white rounded-3xl flex flex-row px-5 py-12 gap-6 align-bottom justify-between mx-5 my-6"
            onClick={() => onSelectProduct(product)}
          >
            <Image src={product.icon} width={60} height={60} alt="" />
            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-medium text-2xl">{product.title}</h2>
              <p>{truncateDescription(product.description)}</p>
            </div>
            <Image
              src={"/img/bytesize_arrow-right.svg"}
              width={20}
              height={20}
              className="mb-0 mt-auto"
              alt=""
            />
          </button>
        )
      )}
    </div>
  );
}
