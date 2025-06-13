import { motion } from "motion/react";
import { useState } from "react";

const Rotateondrag = () => {
  const [rotation, setRotation] = useState(0);

  const handleDrag = (_: any, info: any) => {
    const newRotation = rotation * info.offset.x;
    setRotation(newRotation);
  };

  return (
    <motion.div
      drag
      onDrag={handleDrag}
      style={{rotate:rotation}}
      className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center"
    >
      Rotateondrag
    </motion.div>
  );
};

export default Rotateondrag;
