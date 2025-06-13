import { motion } from "motion/react";

const items = ["item1", "items2", "item3 ", "item4"];

const staggerV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggerList = () => {
  return (
    <div className="h-screen w-full flex justify-center text-white items-center bg-[#d1017]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {items.map((item, index) => (
          <motion.li
            variants={{ staggerV }}
            key={index}
            className="mb-2 p-4 bg-yellow-300"
          >
            {item}
          </motion.li>
        ))}
      </motion.div>
    </div>
  );
};

export default StaggerList;
