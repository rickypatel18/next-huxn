import { FaPlus } from "react-icons/fa";
import { useStore } from "../store/store";

const Sidebar = () => {
  const { lists, workspace, openListModal, openWorkspaceModal } = useStore();

  return (
    <div className="w-60 bg-[#f9f9f9] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-bold flex items-center">Lists</h3>
          <ul>
            {lists.map((list, index) => (
              <li
                key={index}
                className="p-2 rounded-lg cursor-pointer flex items-center"
              >
                <span className="mr-2">{list.emoji}</span>
                {list.name}
              </li>
            ))}
          </ul>
          <button
            onClick={openListModal}
            className="flex justify-center items-center mt-[1rem]"
          >
            <FaPlus className="mr-2" /> List
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold flex items-center">Workspaces</h3>
          <ul>
            {workspace.map((ws, index) => (
              <li
                key={index}
                className="p-2 rounded-lg cursor-pointer flex items-center"
              >
                <span className="mr-2">{ws.emoji}</span>
                {ws.name}
              </li>
            ))}
          </ul>
          <button
            onClick={openWorkspaceModal}
            className="flex justify-center items-center mt-[1rem]"
          >
            <FaPlus className="mr-2" /> Workspaces
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
