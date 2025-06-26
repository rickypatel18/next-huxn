import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchTodos = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );

  if (!response.ok) throw new Error("Network err");
  return response.json();
};

const Pagination = () => {
  const [currentPage, setCurrentPgae] = useState(1);
  const pageSize = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", currentPage],
    queryFn: () => fetchTodos(currentPage, pageSize),
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error fetching</h1>;

  const handlePrev = () => {
    setCurrentPgae((prev) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    setCurrentPgae((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Todos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {currentPage}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
