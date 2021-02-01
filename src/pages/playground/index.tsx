import { motion } from "framer-motion";

const testBox = {
  hidden: {
    opacity: 0,
  },
  visible: {
    // opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    opacity: [1, 0, 1, 0],
    transition: {
      delay: 1,
      // duration: 0.5,
      times: [0, 1, 1, 0.5],
      // repeat: Infinity,
      // times: [0, 0, 1, 1, 0.5, 0.5, 0.001, 0.001],
    },
  },
};

export default function Playground() {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={testBox}
          className="w-44 h-44 bg-red-600 rounded-2xl flex justify-center items-center"
        >
          <span>Test</span>
        </motion.div>
        {/* <motion.div
          animate={{ scale: [0, 1, 0, 1] }}
          transition={{ times: [0, 0.001, 0.9, 1] }}
          // transition={{ repeat: Infinity }}
          className="bg-blue-600 w-24 h-24"
        /> */}
      </div>
    </div>
  );
}
