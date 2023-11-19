"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { HeroButton, Loader } from "@component";
import { useData } from "src/app/useData";

const HeroSection = () => {
  const router = useRouter();
  const sayHi = () => {
    router.push(data?.mediaBanner?.button?.href ?? "/");
  };

  const { data, isLoading } = useData();

  if (isLoading || !data) {
    return <Loader />;
  }

  const { img, leadingText, heading, button } = data.mediaBanner;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 justify-between flex-col md:flex-row h-auto text-black dark:text-white w-full lg:max-h-[656px] bg-[#f5faeb] dark:bg-[#6e757c]">
      <img src={img.src} alt="hero" className="h-full object-cover" />
      <div className="flex-1 py-7 px-5 lg:px-10">
        <div className="text-center md:text-left w-full font-semibold">
          <p>{leadingText}</p>
          <h1 className="my-[10px] lg:max-w-3xl text-2xl lg:text-[50px] lg:my-[40px] lg:leading-[65px] font-semibold px-2 mx-auto lg:mx-0">
            {heading}
          </h1>
          <HeroButton
            className="bg-[#536dc4] text-white py-5 px-6 "
            text={button.text}
            onClick={sayHi}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
