import { motion } from "motion/react";

const boxes = Array.from({ length: 5 });
const Wave = () => {
  return (
    <div className="flex space-x-2 gap-3">
      {boxes.map((_, index) => (
        <motion.div
          key={index}
          className="w-16 h-15 bg-purple-500"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay:index *  0.3
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default Wave;
