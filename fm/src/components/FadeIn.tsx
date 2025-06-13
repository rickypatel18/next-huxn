import { motion } from "motion/react";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FadeIn = () => {
  return (
    <div className="h-screen flex justify-center items-center text-white bg-[#0d1017]">
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{duration:2}}
        className="bg-blue-500 p-4 rounded"
      >
        <h2 className="text-white">FadeIn compo</h2>
      </motion.div>
    </div>
  );
};

export default FadeIn;
