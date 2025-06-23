import { useGetProductByIdQuery } from "../App/service/dummyData";


const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(13);

  if (isError) {
    return <h1>We Got an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{data?.brand}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
};

export default SpecificProduct;
