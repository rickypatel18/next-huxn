import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

const MotiionHooks = () => {
  const x = useMotionValue(100);
  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started");
  });
  
  return <motion.div className="box" drag style={{ x }} />;
};

export default MotiionHooks;
