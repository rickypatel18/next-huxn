import { motion } from "framer-motion";

const ResponsiveBtn = () => {
  return (
    <motion.div
      className="mb-4 p-2 bg-blue-400 text-black rounded"
      whileHover={{ scale: 1.1 }}
      whileTap={{scale:0.9}}
    >
      click
    </motion.div>
  );
};

export default ResponsiveBtn;
