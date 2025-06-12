import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Toast = () => {
  const [visible, setVisible] = useState<boolean | null>(null);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={showToast}
        className="mb-4 p-2 bg-teal-600 text-black rounded"
      >
        Show Notificaitn
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-4 right-4 p-4 bg-green-500 text-black rounded"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            quo.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
