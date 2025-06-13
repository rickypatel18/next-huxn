import {  motion } from "motion/react";
import { useState } from "react";

const menuvariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="p-4 bg-gray-500 text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        Click
      </button>

      <motion.div
        variants={menuvariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-64 h-full bg-blue-200"
      >
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavigationMenu;
