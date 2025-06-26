import { useQueries } from "@tanstack/react-query";
import { useState } from "react";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network error");
  return response.json();
};

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network error");
  return response.json();
};

const FetchFromMultipleEndoint = () => {
  const [currentTodoid, setCurrentTodoid] = useState(1);
  const [currentPostid, setCurrentPostid] = useState(1);

  const results = useQueries({
    queries: [
      { queryKey: ["todos"], queryFn: fetchTodos },
      { queryKey: ["posts"], queryFn: fetchPosts },
    ],
  });

  const [todosQuery, postsQuery] = results;

  if (todosQuery.isLoading || postsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (todosQuery.error || postsQuery.error) {
    return <div>Error loading data</div>;
  }

  const todosData = todosQuery.data || [];
  const postsData = postsQuery.data || [];

  const currentTodo = todosData.find((todo) => todo.id === currentTodoid) || {};
  const currentPost = postsData.find((post) => post.id === currentPostid) || {};

  const handleNext = () => {
    if (todosData.length > 0) {
      setCurrentTodoid((prev) => Math.min(prev + 1, todosData.length));
    }
  };

  const handleNextPost = () => {
    if (postsData.length > 0) {
      setCurrentPostid((prev) => Math.min(prev + 1, postsData.length));
    }
  };

  return (
    <div>
      <h1>FetchFromMultipleEndoint</h1>

      <div>
        <h2>Todo</h2>
        <pre>{JSON.stringify(currentTodo, null, 2)}</pre>
        <button onClick={handleNext} disabled={!todosData.length}>
          Next Todo
        </button>
      </div>

      <div>
        <h2>Post</h2>
        <pre>{JSON.stringify(currentPost, null, 2)}</pre>
        <button onClick={handleNextPost} disabled={!postsData.length}>
          Next Post
        </button>
      </div>
    </div>
  );
};

export default FetchFromMultipleEndoint;
