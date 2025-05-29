import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Cover = ({ onReveal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReveal();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onReveal]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="relative w-screen h-screen bg-[#f0f4f8] text-blue-700 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute w-[60vw] h-[60vw] bg-blue-300 rounded-full blur-3xl opacity-30 animate-blob1"></div>
      <div className="absolute w-[50vw] h-[50vw] bg-purple-300 rounded-full blur-3xl opacity-20 animate-blob2 top-1/3 left-1/2"></div>
      <div className="absolute w-[40vw] h-[40vw] bg-cyan-200 rounded-full blur-3xl opacity-30 animate-blob3 bottom-0 right-0"></div>

      {/* Main welcome text */}
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-center leading-tight z-10">
        Welcome
        <br />
        to my portfolio website
      </h1>

      {/* Typing domain name */}
      <div className="typing-box z-10 mt-4">
        <span className="typing monospace text-2xl sm:text-3xl font-semibold">
          serajealdwake.com
        </span>
      </div>



    </motion.div>
  );
};

export default Cover;
