import { motion } from "motion/react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle Sidebar
      </button>

      <motion.div
        className={`fixed left-0 top-0 h-full bg-gray-700 text-white p-4 ${
          isOpen ? "" : "-translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-lg font-bold">Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          nisi.
        </p>
      </motion.div>
    </div>
  );
};

export default Sidebar;
