import { useState } from "react";
import { useStore } from "../store";

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore();
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  const handleAddExpense = () => {
    if (description.trim() === "" || amount === "") return;

    addExpense({
      id: Date.now(),
      description,
      amount: +amount,
    });

    setAmount("");
    setDescription("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-5 rounded">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">
          Expense Tracker
        </h1>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Expense Description"
            className="w-full px-4 py-3 border-2"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Expense Amount"
            className="w-full px-4 py-3 border-2"
          />

          <button
            onClick={handleAddExpense}
            className="bg-purple-600 text-white w-full px-4 py-2 rounded"
          >
            Add Expense
          </button>
        </div>

        <ul className="space-y-4 mb-5">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-center bg-purple-100 p-4 rounded-lg"
            >
              <span className="text-gray-800 font-bold">
                {expense.description} :{" "}
                <span className="text-purple-600">
                  ${expense.amount.toFixed(2)}
                </span>
              </span>

              <button
                onClick={() => removeExpense(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-purple-700">
            Total Expense :{" "}
            <span className="text-purple-600">
              $
              {expenses
                .reduce((total, expense) => total + expense.amount, 0)
                .toFixed(2)}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
