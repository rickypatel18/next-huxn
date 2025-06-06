import * as action from "@/actions/index";
import SaveButton from "@/components/SaveButton";
import { db } from "@/utils/db";

export default async function Home() {
  //2 get todo
  const data = await db.todo.findMany({
    select: {
      input: true,
      id: true,
    },

    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="rounded-xl p-8">
        <form action={action.createTodo} className="flex flex-col gap-4">
          <input
            className="px-4 py-2 text-black border-2 border-pink-500 rounded-lg focus:outline-none "
            type="text"
            name="inputData"
            placeholder="Enter your todo"
          />
          <button
            className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
            type="submit"
          >
            Add Todo
          </button>
        </form>

        <div className="mt-8 space-y-4">
          {data.map((d) => (
            <form
              action={action.editTodo}
              key={d.id}
              className="flex items-center justify-between space-x-4"
            >
              <input type="hidden" name="inputId" value={d.id} />
              <input
                className="w-full text-black border px-4 py-2 border-gray-300 rounded-lg"
                type="text"
                name="input"
                defaultValue={d.input}
              />

              <div className="flex space-x-2">
                <SaveButton />
                <button
                  className="bg-red-600 text-white py-2 px-5 rounded-lg hover:bg-red-700 transition duration-300"
                  formAction={action.deleteTodo}
                >
                  Delete
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
