import { motion } from "motion/react";

const Pulsing = () => {
  return (
    <motion.div
      className="p-4 bg-green-500  text-white rounded"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >vdfvdfv dsvsdvv</motion.div>
  );
};

export default Pulsing;
