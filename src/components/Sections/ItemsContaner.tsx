"use client";

import React from "react";
import { Charles, HeroButton, Loader } from "@component";
import Image from "next/image";
import { useData } from "src/app/useData";

const ItemsContainer = () => {
  const [isCharlesModalOpen, setIsCharlesModalOpen] =
    React.useState<boolean>(false);
  const { data, isLoading } = useData();

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  const { items, heading: itemRowHeader } = data.itemRow;

  return (
    <>
      <Charles
        isOpen={isCharlesModalOpen}
        onCloseModal={() => setIsCharlesModalOpen(false)}
      />
      <div className="bg-[#effaf9] p-10">
        <h2 className="hidden sm:block sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 mx-auto text-center max-w-[632px]">
          {itemRowHeader}
        </h2>
        <h2 className="sm:hidden block text-xl font-bold mb-4 mx-auto text-center max-w-[632px]">
          Make the most of playtime
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {items.map((item, index) => (
            <div key={index} className="py-5 px-0 sm:px-5 lg:px-10">
              <div className="flex gap-3 items-start md:flex-col">
                <Image
                  width={62}
                  height={62}
                  src={item.img?.src}
                  alt={item.img?.alt}
                  className="mb-2 object-contain"
                />

                <div>
                  <h3 className="text-lg font-bold">{item.heading}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden flex justify-center items-center flex-col gap-y-5 text-center mt-5">
          <HeroButton
            onClick={() => setIsCharlesModalOpen(true)}
            className="h-10 w-[90%] mx-auto bg-[#536dc4] text-white"
            text="Get Started"
          />
          <span className="">Free Shipping | Cancel Any Time</span>
        </div>
      </div>
    </>
  );
};

export default ItemsContainer;
