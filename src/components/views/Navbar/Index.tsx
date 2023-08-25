"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import React, { useState } from "react";
import Logo from "/public/logo.webp";
import Image from "next/image";
import { NavbarItemType, NavbarArray } from "../../utils/NavbarArrayAndTypes";
import Link from "next/link";
import DropDown from "./subComponents/DropDown";
import MobileNavbar from "./subComponents/MobileNavbar";
// import Image from "next/image";

const Navbar = () => {
  const [isNavbarOPen, setNavbarOpen] = useState<boolean>(false);
  const [cartItemNumber, setcartItemNumber] = useState<number>(0)

  return (
    <div className="static top-0 backdrop-blur-lg lg bg-white z-50">
      <div className="py-6 flex justify-between items-center space-x-12">
        <Link href="/" className="w-36 flex-shrink-0 ">
          <Image width={500} height={500} src={Logo} alt="Logo" />
        </Link>
        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex space-x-4 font-semibold text-lg ">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li key={index} className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                <Link className="hover:underline" href={item.href}>
                  {item.label}
                </Link>
                {item.isDropDown ? (
                  <HiOutlineChevronDown
                    className="mt-1 -rotate-180 group-hover:rotate-0 duration-300 "
                    size={16}
                  />
                ) : (
                  ""
                )}
                {item.isDropDown && (
                  <div
                    className={`invisible group-hover:visible absolute top-8 left-0 py-4 px-6 bg-gray-50 font-light min-w-[7.8rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="border flex items-center text-gray-600 px-3 rounded-md">
            <BiSearch />
            <input
              type="text"
              placeholder="Search Products Our Store"
              className="focus:outline-none pl-1 pr-5 py-1 w-80"
            />
          </div>
          <div className="flex-shrink-0 relative h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="absolute w-4 h-4 top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center items-center ">
              {cartItemNumber}
            </div>
            <BsCart size={24} />
          </div>
        </div>

        <div onClick={() => setNavbarOpen(!isNavbarOPen)}>
          {isNavbarOPen ? (
            <div className="flex lg:hidden">
              <IoMdClose size={27} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={27} />
            </div>
          )}
        </div>
      </div>
      {isNavbarOPen && <MobileNavbar />}
    </div>
  );
};

export default Navbar;

