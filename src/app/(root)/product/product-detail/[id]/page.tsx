"use client";
import { useEffect, useState } from "react";
import { Product } from "../../../../../../typing";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import ProductCard from "@/components/Home/Productcart";
import { getProductByCategory, getSingleProduct } from "../../../../../../Request/request";
import { Button } from "@/components/ui/button";
import AddToCart from "./add-cart";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const product = await getSingleProduct(params.id);
      setSingleProduct(product);
      
      const related = await getProductByCategory(product.category);
      setRelatedProducts(related);
    }
    fetchData();
  }, [params.id]);

  if (!singleProduct) return <p>Loading...</p>;

  const num = Math.round(singleProduct?.rating?.rate);
  const starArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {singleProduct.title}
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {starArray.map((_, index) => (
                <StarIcon
                  key={index}
                  size={20}
                  fill="yellow"
                  className="text-yellow-600"
                />
              ))}
            </div>
            <p className="text-none text-gray-700 font-semibold">
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
            ${singleProduct?.price}
          </h1>
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct?.description}
          </p>
          <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
            Category : {singleProduct?.category}
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            SKU : {Math.floor(Math.random() * 500)}
          </p>
          <AddToCart product={singleProduct} />
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto">
        <h1 className="text-2xl text-black font-semibold">Related Products</h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
