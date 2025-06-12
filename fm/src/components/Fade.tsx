import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Fade = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle Fade
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="p-8 bg-gray-200 text-black rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello,
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Fade;
