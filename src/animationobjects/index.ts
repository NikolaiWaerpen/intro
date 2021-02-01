export const CONTAINER = {
  hidden: {
    // transition: {
    //   when: "afterChildren",
    // },
  },
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const ITEM = {
  // hidden: {
  //   opacity: 0,
  // },
  visible: {
    opacity: [0, 1],
    transition: {
      // delay: 1,
    },
  },
};

export const ITEMREVERSED = {
  visible: {
    opacity: [1, 0],
  },
};
