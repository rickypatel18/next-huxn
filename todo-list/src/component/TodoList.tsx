import { useState } from "react";
import useStore from "../store/store";

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useStore();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    addTodo({ id: Date.now(), text: inputValue, completed: false });
    setInputValue("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          To-do List
        </h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="add todo"
            className="flex-grow px-4 py-2 border rounded-l-lg border-gray-300"
          />

          <button
            onClick={handleAddTodo}
            className="bg-blue-400 p-2 ml-2 cursor-pointer"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                />
                <span
                  className={`${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
