import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

interface Todo {
  id?: number;
  title: string;
  completed: false;
}

const postTodo = async (newTodo: Todo) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) throw new Error("Network err");
  return response.json();
};

const MutatingData = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { mutate, error, status } = useMutation<Todo, Error, Todo>({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "") return;
    mutate({ title, completed: false });
    setTitle("");
  };
  return (
    <div>
      <h1>Create new todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter title"
          className="border"
        />
        <button type="submit">
          {status == "pending" ? "Adding..." : "Add Todo"}
        </button>

        {error && <h1>{error.message}</h1>}
        {status === "success" && <h1>Todo added sucessfuly</h1>}
      </form>
    </div>
  );
};

export default MutatingData;
