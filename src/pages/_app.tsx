import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "../styles/globals.css";

const mainSpan = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 200,
    transition: {
      delay: 3.5,
      duration: 1,
    },
  },
};

export default function App({ Component, pageProps }) {
  const [introOver, setIntroOver] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroOver(true);
    }, 5000);
  }, []);

  return (
    <div>
      {introOver ? (
        <Component {...pageProps} />
      ) : (
        <div className="w-screen h-screen main flex flex-col justify-center items-center bg-offwhite">
          <div className="text-wrapper">
            <span className="text text-1">creation is my religion</span>
            <span className="text text-2">creation is my religion</span>
            <span className="text text-3">creation is my religion</span>
            <span className="text text-4">creation is my religion</span>
            <span className="text text-5">creation is my religion</span>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={mainSpan}
              className="text text-6"
            >
              creation is my religion
            </motion.span>
            <span className="text text-7">creation is my religion</span>
            <span className="text text-8">creation is my religion</span>
            <span className="text text-9">creation is my religion</span>
            <span className="text text-10">creation is my religion</span>
            <span className="text text-11">creation is my religion</span>
          </div>
        </div>
      )}
    </div>
  );
}
