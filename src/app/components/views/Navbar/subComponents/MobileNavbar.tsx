"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {
  NavbarArray,
  NavbarItemType,
} from "@/app/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import Expend from "./Expend";

const MobileNavbar = () => {
  const [isExpended, setExpended] = useState(false);
  return (
    <div>
      <div>
        <div className="w-full px-6 py-4 bg-gray-200">
          {NavbarArray.map((item: NavbarItemType, index: number) => {
            return <Expend key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
