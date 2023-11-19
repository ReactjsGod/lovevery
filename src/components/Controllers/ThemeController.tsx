"use client";

import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../Providers/ThemeProvider";

const ThemeController = () => {
  const themeContext = useTheme();
  const { theme, toggleTheme } = themeContext;
  return (
    <button
      onClick={toggleTheme}
      className="flex gap-3 justify-center border rounded-full p-1 shadow-gray-300 shadow-lg bg-white"
    >
      {theme === "light" ? (
        <BsSun className="w-5 h-5" />
      ) : (
        <BsMoon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeController;
