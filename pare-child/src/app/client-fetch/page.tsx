"use client";

import { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const ClientFetch = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const response = await fetch(
          "https:jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setTodo(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>error ...</div>;
  }

  if (todo) {
    return (
      <div>
        <h1>Todo</h1>
        <p>{todo.id}</p>
        <p>{todo.title}</p>
        <p>{todo.completed ? "yes" : "no"}</p>
      </div>
    );
  }
  return null;
};

export default ClientFetch;
