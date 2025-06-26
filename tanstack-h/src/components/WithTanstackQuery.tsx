import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

const WithTanstackQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
  });

  if (isLoading) return <h1 className="text-[red]">Loading ...</h1>;
  if (error) return <h1 className="text-[red]">{error.message}</h1>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> /*string,replacer fn,
      indentation */
    </div>
  );
};

export default WithTanstackQuery;
