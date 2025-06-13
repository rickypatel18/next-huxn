import { motion } from "motion/react";
import { useState } from "react";

const switchVariant = {
  off: { x: 0 },
  on: { x: 80 },
};

const ToggleSwitch = () => {
  const [ison, setIson] = useState(false);

  return (
    <div className="relative inline-block w-36 h-16">
      <div
        className={`w-full h-full rounded-full bg-gray-300 cursor-pointer ${
          ison ? "bg-green-500" : ""
        } `}
        onClick={() => setIson(!ison)}
      >
        <motion.div
          variants={switchVariant}
          animate={ison ? "on" : "off"}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute top-1 left-1 w-14 h-14 rounded-full bg-white"
        ></motion.div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
