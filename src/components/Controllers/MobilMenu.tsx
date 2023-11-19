"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const MobilMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const ButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const MenuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ButtonRef.current && ButtonRef.current.contains(e.target as Node)) {
        return;
      }

      if (MenuRef.current && !MenuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlerNav = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        id="Hamburger menu"
        name="Hamburger menu"
        ref={ButtonRef}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
        className="sm:hidden btn-animate flex flex-col items-center duration-500 transition-all z-40 ease-in-out"
      >
        <div
          className={`w-6 h-0.5 bg-black  dark:bg-white mb-1  ${
            isOpen && "rotate-45 relative top-1"
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-black  mb-1 dark:bg-white  ${
            isOpen && "rotate-180 opacity-0 duration-300 ease-linear"
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-black dark:bg-white   ${
            isOpen && "-rotate-45 relative bottom-2"
          }`}
        />
      </button>
      {isOpen && (
        <div
          ref={MenuRef}
          className="absolute z-40  backdrop-blur-2xl shadow-xl -bottom-[14.3rem] -left-44 w-[200px] p-2 rounded-b-xl"
        >
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <button
              className="text-xl font-bold duration-700 hover:scale-110 ease-in-out text-black"
              onClick={() => handlerNav("/")}
            >
              Home
            </button>
            <button
              className="text-xl font-bold duration-700 hover:scale-110 ease-in-out text-black"
              onClick={() => handlerNav("/sign-in")}
            >
              Sign up
            </button>
            <button
              className="text-xl font-bold duration-700 hover:scale-110 ease-in-out text-black"
              onClick={() => handlerNav("/items")}
            >
              Items
            </button>
            <button
              className="text-xl font-bold duration-700 hover:scale-110 ease-in-out text-black"
              onClick={() => handlerNav("/sign-in")}
            >
              <FaUserCircle className="text-gray-400 text-4xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobilMenu;
