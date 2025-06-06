import { products } from "@/db/data";
import Link from "next/link";
import React from "react";

const Ecommerce = () => {
  return (
    <div>
      <section className="m-[4rem]">
        <div>
          <h1 className="text-3xl">Ecommerce</h1>
        </div>

        <section className="flex gap-3">
          {products.map((product) => (
            <div className="w-[200px] border" key={product.id}>
              <Link href={`/ecommerce/${product.id}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt="product-img" />
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Ecommerce;
