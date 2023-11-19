"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CharlesProps } from "@interfaces";
import { CharlesBtn } from "@component";

const Charles: React.FC<CharlesProps> = ({ isOpen, onCloseModal, text }) => {
  const greeting =
    "🎉Hi I am Charles, and I am proud to be your Developer 🚀😃";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-screen h-screen backdrop-blur-2xl z-50">
          <div className="w-full h-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className=" w-56 p-5 h-48 right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md z-50"
            >
              <div className="flex flex-col max-w-[290px]">
                <div className="text-center font-bold text-lg">
                  {text ? text : greeting}
                </div>
                <CharlesBtn onClick={onCloseModal} text={"Close"} />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Charles;
