"use client";

import { ButtonProps } from "@interfaces";
import React from "react";

const CharlesBtn: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={`${className} charles_3d`} onClick={onClick}>
      {text}
    </button>
  );
};

export default CharlesBtn;
