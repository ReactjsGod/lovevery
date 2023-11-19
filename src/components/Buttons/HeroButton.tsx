"use client";

import { ButtonProps } from "@interfaces";
import React from "react";

const HeroButton: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick,
  btnType,
}) => {
  const buttonClasses = `rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-700 hover:scale-110 ${className}`;

  return (
    <button type={btnType} className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default HeroButton;
