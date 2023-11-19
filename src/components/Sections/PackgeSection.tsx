"use client";

import { Packages } from "@component";
import React from "react";

const PackageSection = () => {
  const [packageData, setPackageData] = React.useState(null);

  React.useEffect(() => {
    const getPackages = async () => {
      try {
        const response = await fetch("/api/packages");
        console.log("Response status:", response.status);
        if (response.ok) {
          const data = await response.json();
          setPackageData(data["packageData"]["package"]);
          return data.package;
        } else {
          console.error("Failed to fetch package data");
        }
      } catch (error) {
        console.error("An error occurred while fetching package data", error);
      }
    };

    getPackages();
  }, []);

  return (
    <div className="my-10 w-full flex flex-col justify-center items-center">
      <h1 className=" font-bold w-full text-black dark:text-white text-center md:text-[2.5rem] leading-[3.5rem] text-xl mb-8 max-w-6xl">
        Designed by experts for your child&apos;s developing brain
      </h1>
      {packageData !== null && <Packages packages={packageData} />}
    </div>
  );
};

export default PackageSection;
