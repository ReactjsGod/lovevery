'use client'

import { PackageCardProps } from '@interfaces';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const PackageCard: React.FC<PackageCardProps> = ({
    imgurl,
    header,
    description,
    url,
  }) => {
    return (
      <Link
        href={url}
        className="max-w-[300px] hover:scale-105 duration-700 ease-in-out m-4 rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] dark:shadow-[2px_5px_26px_2px_#F7FAFE]"
      >
        <img
          src={imgurl}
          alt={header}
          className="mb-4 w-full h-[300px] object-cover rounded-t-lg"
        />
        <div className="p-4 text-black dark:text-white">
          <h2 className="text-lg font-bold mb-2">{header}</h2>
          <p className="text-gray-700 dark:text-white">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold flex gap-2 items-center hover:underline mt-4"
          >
            Shop {header} <IoIosArrowForward />
          </a>
        </div>
      </Link>
    );
  };
export default PackageCard