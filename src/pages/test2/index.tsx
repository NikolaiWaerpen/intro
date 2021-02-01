import { motion } from "framer-motion";

const item1 = {
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: 1,
      repeatDelay: 3,
    },
  },
};
const item2 = {
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 2.5,
      repeat: 1,
      repeatDelay: 3,
    },
  },
};
const item3 = {
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 3,
      repeat: 1,
      repeatDelay: 3,
    },
  },
};
const item4 = {
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 3.5,
      repeat: 1,
      repeatDelay: 3,
    },
  },
};
const item5 = {
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 4,
      repeat: 1,
      repeatDelay: 3,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-gray-200 font-bold font-serif text-3xl">
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <motion.div animate="visible" initial="hidden" variants={item5}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={item4}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={item3}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={item2}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={item1}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>

        <motion.span className="block">creation is my religion</motion.span>

        <motion.div animate="visible" initial="hidden" variants={item1}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={item2}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={item3}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={item4}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={item5}>
          <motion.span className="block">creation is my religion</motion.span>
        </motion.div>
      </div>
    </div>
  );
}
