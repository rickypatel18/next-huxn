import { MdMoreVert } from "react-icons/md";
import Mainarea from "./components/Mainarea";
import Sidebar from "./components/Sidebar";
import { useStore } from "./store/store";
import Modal from "./components/Modal";

const App = () => {
  const {
    todos,
    editIndex,
    editText,
    dropdownIndex,
    handleEdit,
    handleUpdate,
    handleDropdownclick,
    deleteTodo,
    setEditIndex,
    setEditText,
  } = useStore();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-teal-100/30">
        <Mainarea />

        <div className="mt-5">
          <h2 className="text-xl font-bold mb-4 ml-[2rem]">Todo List</h2>
          <ul className="list-disc pl-5">
            {todos.map((todo, index) => (
              <li key={index} className="mb-2 ml-[2rem]">
                {editIndex === index ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="border border-gray-300 p-1 rounded-lg mr-2"
                    />

                    <button
                      onClick={() => handleUpdate(index)}
                      className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="bg-gray-500 text-white px-2 py-1 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="relative flex justify-between items-center">
                    <div>
                      <span className="mr-4">
                        <strong>{todo.text}</strong> (List: {todo.list},
                        Workspace:{todo.workspace})
                      </span>
                    </div>

                    <div className="flex items-center">
                      <MdMoreVert
                        className="cursor-pointer"
                        size={24}
                        onClick={() => handleDropdownclick(index)}
                      />

                      {dropdownIndex === index && (
                        <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg">
                          <button
                            onClick={() => handleEdit(index)}
                            className="block px-4 py-2 text-gray-700 text-left"
                          >
                            Update
                          </button>

                          <button
                            onClick={() => deleteTodo(index)}
                            className="block px-4 py-2 text-gray-700 text-left"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default App;
