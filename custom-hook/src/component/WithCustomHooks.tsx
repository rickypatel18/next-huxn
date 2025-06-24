// components/WithCustomHooks.tsx

import { useFetch } from "../hooks/useFetch";

interface Todo {
  id: number;
  title: string;
}

const WithCustomHooks = () => {
  const [data, loading, error] = useFetch<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return <p>Error fetching todos: {errorMessage}</p>;
  }

  return (
    <div>{data && data.map((item) => <p key={item.id}>{item.title}</p>)}</div>
  );
};

export default WithCustomHooks;
