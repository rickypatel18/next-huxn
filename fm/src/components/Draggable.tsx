import { motion } from "motion/react";

const Draggable = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black text-white">
      <motion.div
        className="w-32 h-32 bg-green-500 rounded-lg"
        drag
        dragConstraints={{
          left: 0,
          right: 300,
          top: 0,
          bottom: 300,
        }}
      >
        drag me
      </motion.div>
    </div>
  );
};

export default Draggable;
