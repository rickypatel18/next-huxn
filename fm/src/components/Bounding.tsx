import { motion } from "motion/react";

const Bounding = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#0d1017] text-white">
      <motion.div
        className="w-16 h-16 bg-yellow-400 rounded-full"
        animate={{ y: [0, -100, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Bounding;
