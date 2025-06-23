import { useAddNewProductMutation } from "../App/service/dummyData"; 


const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isError) {
    return <h1>We Got an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-shirt",
        description: "lorem kcmds ckd ck cmm cemc qwmcpwcccc  w w weve ",
      };

      await addNewProduct(newProductData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add new product
      </button>
    </div>
  );
};

export default AddNewProduct;
