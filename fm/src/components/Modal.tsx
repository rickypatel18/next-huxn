import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsopne] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-400 text-black rounded"
        onClick={() => setIsopne(!isOpen)}
        style={{ padding: "10px" }}
      >
        click
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setIsopne(false)}
          >
            <motion.div
              className="bg-white p-4 rounded"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-100vh" }}
              animate={{ y: "0vh" }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-bold text-black">Modal Title</h2>
              <p className="text-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit
              </p>
              <button
                onClick={() => setIsopne(false)}
                className="mt-4 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
