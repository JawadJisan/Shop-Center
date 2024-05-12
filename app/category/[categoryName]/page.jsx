"use client";
import HeroProduct from "@/components/HeroProduct";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/dataUtils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CategoryPage = ({ params: { categoryName } }) => {
  const router = useRouter();
  const productByCategory = getProductsByCategory(categoryName);
  const pathName = usePathname();
  const activeCategory = pathName.split("/")[2];
  console.log(activeCategory);
  const handleCategoryClick = (categoryName) => {
    router.push(`/category/${categoryName}`);
  };

  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <button
            onClick={() => handleCategoryClick("all")}
            className={`hover:border-b border-black block h-6 box-border mt-4 ${
              activeCategory === "all"
                ? "underline font-bold text-green-500"
                : ""
            } `}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryClick("smartphones")}
            className={`hover:border-b border-black block h-6 box-border mt-4 ${
              activeCategory === "smartphones"
                ? "underline font-bold text-green-500"
                : ""
            } `}
          >
            Smartphones
          </button>
          <button
            onClick={() => handleCategoryClick("laptops")}
            className={`hover:border-b border-black block h-6 box-border mt-4 ${
              activeCategory === "laptops"
                ? "underline font-bold text-green-500"
                : ""
            } `}
          >
            Laptops
          </button>
          <button
            onClick={() => handleCategoryClick("fragrances")}
            className={`hover:border-b border-black block h-6 box-border mt-4 ${
              activeCategory === "fragrances"
                ? "underline font-bold text-green-500"
                : ""
            } `}
          >
            Fragrances
          </button>
          <button
            onClick={() => handleCategoryClick("skincare")}
            className={`hover:border-b border-black block h-6 box-border mt-4 ${
              activeCategory === "skincare"
                ? "underline font-bold text-green-500"
                : ""
            } `}
          >
            Skincare
          </button>
          <button
            onClick={() => handleCategoryClick("groceries")}
            className={`hover:border-b border-black block h-6 box-border mt-4 ${
              activeCategory === "groceries"
                ? "underline font-bold text-green-500"
                : ""
            } `}
          >
            Groceries
          </button>
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {productByCategory.length &&
            productByCategory.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
      <HeroProduct />
    </main>
  );
};

export default CategoryPage;
