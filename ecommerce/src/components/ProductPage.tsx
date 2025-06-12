import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  images: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get<Product>(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  if (!product) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="p-5 w-[60%]">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 bg-black text-white"
      >
        Back
      </button>

      <img src={product.images[0]} alt="" className="w-[50%] h-auto mb-5" />
      <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
      <p className="mb-4 text-gray-700">{product.description}</p>
      <div>
        <p>{product.price}</p>
        <p>{product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;
