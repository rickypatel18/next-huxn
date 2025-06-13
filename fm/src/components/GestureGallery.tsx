import { AnimatePresence, motion } from "motion/react";
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1739989934228-e74afa40eca2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1739198857961-853f1896cf24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1743805350606-56ed5103769c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1749666992906-f059c7d88139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1749371930388-50c782b0acea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
];

const GestureGallery = () => {
  const [currentindex, setCurrentindex] = React.useState(0);

  const handleSwipe = (_: any, info: any) => {
    if (info.offset.y > 100) {
      setCurrentindex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.y < -100) {
      setCurrentindex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div className="relative w-72 h-72 overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentindex}
          src={images[currentindex]}
          alt="img"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleSwipe}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full rounded"
        />
      </AnimatePresence>
    </div>
  );
};

export default GestureGallery;
