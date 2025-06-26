import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ReFetchInterval = () => {
  const [currentid, setCurrentId] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo(currentid),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) <h1>Loading ...</h1>;
  if (error) <h1>{error.message}</h1>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={() => setCurrentId((prev) => (prev < 200 ? prev + 1 : 1))}
      >
        Next
      </button>
    </div>
  );
};

export default ReFetchInterval;
