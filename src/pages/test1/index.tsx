import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function Home() {
  return (
    <div className="bg-gray-200 font-bold font-serif text-3xl">
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="flex flex-col-reverse"
        >
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
        </motion.div>
        <div>
          <span className="block text-red-600">creation is my religion</span>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="flex flex-col"
        >
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
          <motion.span variants={item} className="block">
            creation is my religion
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
