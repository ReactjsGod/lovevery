"use client";

import { PackageCard } from "@component";
import { PackagesProps } from "@interfaces";

const Packages: React.FC<PackagesProps> = ({ packages }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center">
      {packages.map((packageData, index) => (
        <PackageCard key={index} {...packageData} />
      ))}
    </div>
  );
};

export default Packages;
