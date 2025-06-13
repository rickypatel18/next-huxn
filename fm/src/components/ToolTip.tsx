import { motion } from "motion/react";
import { useState } from "react";

const toolTipV = {
  hidden: { opcaity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const ToolTip = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-4 bg-blue-400 text-black"
      >
        Hover me
      </button>

      {visible && (
        <motion.div
          variants={toolTipV}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          className="absolute bg-gray-700 text-white p-4 rounded"
        >
          Tooltip
        </motion.div>
      )}
    </div>
  );
};

export default ToolTip;
