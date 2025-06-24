import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setISModalOpne] = useState(false);

  const openModal = () => {
    setISModalOpne(true);
  };
  const closeModal = () => {
    setISModalOpne(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-green-400 rounded-md text-white"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <Modal>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Body>Modal Body</Modal.Body>
          <Modal.Footer>
            <button
              onClick={closeModal}
              className="px-2 py-2 text-white bg-green-400 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={closeModal}
              className="px-2 py-2 text-white bg-red-400 rounded-md"
            >
              Confirm
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default App;
