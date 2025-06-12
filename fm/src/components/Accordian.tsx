import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { title: "Title1", content: "This is content for 1" },
  { title: "Title2", content: "This is content for 2" },
  { title: "Title3", content: "This is content for 3" },
];
const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleButton = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((i, index) => (
        <div key={i.title}>
          <button
            onClick={() => toggleButton(index)}
            className="w-full text-black text-left p-2 bg-gray-300 rounded focus:outline-none"
          >
            {i.title}
          </button>

          <motion.div
            className="overflow-hidden "
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="p-2 bg-gray-200 rounded text-black">{i.content}</h1>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
