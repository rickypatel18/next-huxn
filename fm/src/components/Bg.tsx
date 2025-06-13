import { motion } from "motion/react";

const Bg = () => {
  return (
    <motion.div
      className="w-screen h-screen"
      animate={{ backgroundColor: ["#ff0000", "#00ff00", "#f0f00f", "#ff00ff"] }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
};

export default Bg;
