import { products } from "@/db/data";

const Product = async ({ params }: { params: { product: string } }) => {
  const { product } = await params;

  const findProduct = products.find((p) => p.id === Number(product));

  return (
    <div className="m-[4rem]">
      <h1>{findProduct?.name}</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={findProduct?.image} alt="" className="w-[40rem]" />
      <p className="text-2xl mt-[2rem]">Price : ${findProduct?.price}</p>
    </div>
  );
};

export default Product;
