import { useDeleteProductMutation } from "../App/service/dummyData";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();
  if (isError) {
    return <h1>We Got an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>{data?.title ? `${data.title} successfully deleted` : ""}</p>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete product
      </button>
    </div>
  );
};

export default DeleteProduct;
