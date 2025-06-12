import { motion } from "motion/react";

const Text = () => {
  return (
    <motion.div
      className="text-2xl font-bold text-white"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      Text
    </motion.div>
  );
};

export default Text;
