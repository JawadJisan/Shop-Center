import { getProductById } from "@/lib/dataUtils";
import Image from "next/image";
import Link from "next/link";

const ProductPage = ({ params: { id } }) => {
  const projectById = getProductById(id);
  const {
    title,
    // id,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = projectById;

  function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
  }

  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              width="400"
              height="500"
              src={thumbnail}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt=""
            />

            <div className="flex gap-4 mt-4">
              {images.length &&
                images.map((image, index) => (
                  <Image
                    key={index}
                    width="100"
                    height="100"
                    src={image}
                    className="w-[100px] h-[100px] mx-auto border object-cover"
                    alt=""
                  />
                ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>

            <span className="text-[#919090] my-3">
              <Link href={`/category/${category}`}>({category})</Link>
            </span>
            <div className="mt-3 flex items-center justify-start gap-1">
              <Image src="/assets/svg/star.svg" width={20} height={20} alt="" />
              <Image src="/assets/svg/star.svg" width={20} height={20} alt="" />
              <Image src="/assets/svg/star.svg" width={20} height={20} alt="" />
              <Image src="/assets/svg/star.svg" width={20} height={20} alt="" />
              <Image src="/assets/svg/star.svg" width={20} height={20} alt="" />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${price}
                </span>
                <span className="font-bold text-2xl">
                  ${discountedPrice.toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${discountedPrice.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
