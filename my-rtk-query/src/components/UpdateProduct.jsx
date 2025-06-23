import { useUpdateProductMutation } from "../App/service/dummyData";

const UpdateProduct = ({ productId }) => {
  const [UpdatedProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

  if (isError) {
    return <h1>We Got an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title updated",
      };

      await UpdatedProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
