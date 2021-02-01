import { motion } from "framer-motion";

const mainVariant = {
  hidden: {
    x: -180,
  },
  visible: {
    x: 0,
    transistion: {
      duration: 0.3,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={mainVariant}
      className="w-screen h-screen bg-black"
    >
      <div className="flex pt-56 pl-6">
        <h1 className="uppercase text-4xl text-offwhite">
          Nikolai,
          <br /> The Creator
        </h1>
      </div>
    </motion.div>
  );
}
