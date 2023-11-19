import { ThemeController } from "@Controllers";
import { Mobile } from "@component";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-20 bg-[#536dc4]">
      <div className="flex justify-between px-5 h-full border items-center">
        <Link
          href={"/"}
          className="text-xl font-bold duration-700 hover:scale-110 ease-in-out text-black dark:text-white"
        >
          <img
            src={
              "https://images.ctfassets.net/0sea1vycfyqy/62gNRE2YaYcGCcrMngW2s2/471a5490ff9363ad9c183b3af5439e78/logo-green.svg"
            }
            alt="logo"
            width={200}
            height={200}
          />
        </Link>
        <div className="flex gap-10 items-center">
          <div className="hidden sm:flex gap-10">
            <Link
              href={"/sign-in"}
              className="text-xl font-bold duration-700 hover:scale-110 ease-in-out text-black dark:text-white"
            >
              Sign up
            </Link>
            <Link
              href={"/items"}
              className="text-xl font-bold duration-700 hover:scale-110 ease-in-out text-black dark:text-white"
            >
              Items
            </Link>
          </div>
          <ThemeController />
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
