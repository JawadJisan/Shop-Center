import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroProduct from "@/components/HeroProduct";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/dataUtils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const allProducts = getAllProducts();
  const requiredProduct = allProducts.slice(0, 12);
  return (
    <>
      <Hero />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
            {requiredProduct.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
        <HeroProduct />
      </main>
      <Footer />
    </>
  );
}
