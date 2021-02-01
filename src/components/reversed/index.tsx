import { motion } from "framer-motion";
import { CONTAINER, ITEMREVERSED } from "../../animationobjects";

export default function Reversed() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={CONTAINER}
        className={`flex flex-col`}
      >
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
      </motion.div>

      <motion.span className="block">creating is my religion</motion.span>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={CONTAINER}
        className={`flex flex-col-reverse`}
      >
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
        <motion.span variants={ITEMREVERSED} className="block">
          creating is my religion
        </motion.span>
      </motion.div>
    </div>
  );
}
