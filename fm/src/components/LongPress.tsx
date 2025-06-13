import { motion } from "motion/react";
import { useState } from "react";

const LongPress = () => {
  const [isLarge, setIsLarge] = useState(false);

  const handleLongPressStart = () => {
    setIsLarge(true);
  };
  const handleLongPressEnd = () => {
    setIsLarge(false);
  };

  return (
    <motion.div
      onTapStart={handleLongPressStart}
      onTapCancel={handleLongPressEnd}
      onTap={handleLongPressEnd}
      className={`w-32 h-32 bg-blue-500 flex justify-center items-center cursor-pointer ${
        isLarge ? "w-48 h-48" : ""
      }`}
    >
      LongPress
    </motion.div>
  );
};

export default LongPress;
