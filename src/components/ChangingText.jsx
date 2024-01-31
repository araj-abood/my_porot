import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "React Developer",
  "Python Programmer",
  "Data scientist",
  "Software Engineer",
];

const delay = 1000;

function ChangingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const word = skills[currentWord];

  useEffect(() => {
    let innerTimeOut;

    const timeout = setTimeout(() => {
      if (currentIndex < word.length && !isDeleting) {
        setCurrentText((prev) => prev + word[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }

      if (currentIndex == word.length) setIsDeleting(true);

      if (isDeleting && currentIndex >= 0) {
        innerTimeOut = setTimeout(
          () => {
            setCurrentText((prev) => prev.slice(0, -1));
            setCurrentIndex((prev) => prev - 1);
          },
          currentIndex == 0 || currentIndex == word.length ? 1000 : 0
        );
      }

      if (isDeleting && currentIndex < 0) {
        setIsDeleting(false);
        setCurrentIndex(0);
        setCurrentWord((prev) => (prev + 1) % skills.length);
        setCurrentText("");
      }
    }, delay / currentIndex + 1);

    return () => {
      clearTimeout(innerTimeOut);
      clearTimeout(timeout);
    };
  }, [currentIndex, currentWord, currentText, isDeleting]);

  return (
    <h1 className="text-5xl w-[900px] mx-auto">
      I am a{" "}
      <span className="bg-gradient-to-r from-main-500  to-main-300 text-transparent inline-block  bg-clip-text ">
        {currentText}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        animate={{ opacity: 1 }}
      >
        |
      </motion.span>
    </h1>
  );
}

export default ChangingText;
