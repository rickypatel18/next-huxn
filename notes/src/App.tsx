import { AiOutlinePlus } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "./components/Sidebar";
import useNotesStore from "./store/store";

const App = () => {
  const {
    editorContent,
    setEditorContent,
    noteColor,
    setNoteColor,
    currentNoteIndex,
    addOrUpdateNote,
  } = useNotesStore();

  return (
    <div className="h-screen flex ">
      <Sidebar />
      <div className="flex flex-col w-2/3 p-8">
        <div className="">
          {/* Text Editor (React Quill) */}
          <div>
            <ReactQuill
              value={editorContent}
              onChange={setEditorContent}
              placeholder="Write your note here..."
              theme="snow"
              className="h-96 bg-white mb-[2rem]"
            />
          </div>
        </div>

        {/* Color Selector */}
        <div className="flex mt-[2rem] ml-[1rem] items-center space-x-4">
          <input
            type="color"
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
            className="w-10 h-10 p-1 border rounded-full"
          />
          <p className="underline font-bold">Choose a note color</p>
        </div>

        {/* Save Button */}
        <button
          className="bg-blue-500 text-white py-2 mt-4 rounded-lg shadow-lg hover:bg-blue-600 flex items-center justify-center"
          onClick={addOrUpdateNote}
        >
          <AiOutlinePlus className="mr-2" />{" "}
          {currentNoteIndex !== null ? "Update Note" : "Save Note"}
        </button>
      </div>
    </div>
  );
};

export default App;
