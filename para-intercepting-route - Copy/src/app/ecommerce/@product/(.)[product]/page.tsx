import { products } from "@/db/data";
import React from "react";

const InterceptingProduct = async ({
  params,
}: {
  params: { product: string };
}) => {
  const { product } = await params;
  const findProduct = products.find((p) => p.id === Number(product));

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center relative ">
        <h1 className="text-3xl mb-4">{findProduct?.name}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={findProduct?.image} alt="" className="w-[40rem] " />
        <p className="text-2xl mt-[2rem]">Price : ${findProduct?.price}</p>
      </div>
    </div>
  );
};

export default InterceptingProduct;
