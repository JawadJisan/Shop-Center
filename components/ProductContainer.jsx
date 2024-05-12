import React from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/lib/dataUtils";

const ProductContainer = () => {
  const allProducts = getAllProducts();
  console.log(allProducts);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
      <ProductCard />
    </div>
  );
};

export default ProductContainer;
