"use client";

import React from "react";
import Lottie from "lottie-react";
import Loading from "../../../assets/ani.json";

const Loader = () => {
  return (
    <div className="min-h-screen min-w-screen top-0 left-0 right-0 bottom-0 fixed backdrop-blur-2xl z-50">
      <div className="flex justify-center items-center w-full h-full">
        <Lottie
          animationData={Loading}
          loop={true}
          className="w-[200px] h-[200px]"
        />
      </div>
    </div>
  );
};

export default Loader;
