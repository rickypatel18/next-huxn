import { motion } from "motion/react";
import { useState } from "react";

const Swapable = () => {
  const [isemove, setIsRemove] = useState(false);
  const handleSwipe = (_: any, info: any) => {
    if (info.offset.x > 100) {
      setIsRemove(true);
    } else if (info.offset.x < -100) {
      setIsRemove(true);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <motion.div
        className={`w-64 h-32 bg-blue-500 flex items-center text-black ${
          isemove ? "hidden" : ""
        }`}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        onDragEnd={handleSwipe}
      ></motion.div>
    </div>
  );
};

export default Swapable;
