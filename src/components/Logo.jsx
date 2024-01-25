import { motion, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function Logo() {
  const controls = useAnimation();
  const [width, setWidth] = useState(0);
  const restOfWord = useRef();
  const aj = useRef();

  function handleMouseEnter() {
    controls.start("show");
  }

  if (width) console.log(width);

  function handleMouseLeave() {
    controls.start("initial");
  }

  const variants = {
    show: {
      left: 35,
      opacity: 1,
      transition: { delay: 0.4 },
    },
    initial: {
      left: 0,
      opacity: 0,
      transition: { delay: 0.1 },
    },
  };

  const containerVariants = {
    show: {
      width: width,
    },
    initial: {
      width: "auto",
      transition: { delay: 0.3 },
    },
  };

  useEffect(() => {
    setWidth(restOfWord.current.offsetWidth + aj.current.offsetWidth);
  }, []);

  return (
    <motion.h1
      variants={containerVariants}
      animate={controls}
      className="text-main-200  cursor-pointer text-5xl font-bold flex justify-between relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span>A</motion.span>
      <motion.span
        ref={restOfWord}
        variants={variants}
        animate={controls}
        transition={{ duration: 0.1, delay: 0.2 }}
        className=" absolute inline-block -z-10 text-nowrap opacity-0"
      >
        BDULLAH AL-ARA
      </motion.span>
      <motion.span>J</motion.span>
      <span ref={aj} className="hiddedn absolute opacity-0">
        AJ
      </span>
    </motion.h1>
  );
}

export default Logo;
