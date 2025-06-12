import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const Scrollanim = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="bg-blue-500 w-32 h-32 rounded-lg shadow-lg "
        style={{ scale, opacity }}
      ></motion.div>
      <div className="w-full h-[250vh]"></div>
    </div>
  );
};

export default Scrollanim;
