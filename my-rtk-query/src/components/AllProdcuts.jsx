import { useGetAllProductsQuery } from "../App/service/dummyData";


const AllProdcuts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h1>We Got an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.products.map((p) => (
        <div key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProdcuts;
