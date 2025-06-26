import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("net err");
  return response.json();
};

const StaleTime = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
    staleTime: 5000,
  });

  if (isLoading) <h1>Loading ...</h1>;
  if (error) <h1>{error.message}</h1>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StaleTime;
