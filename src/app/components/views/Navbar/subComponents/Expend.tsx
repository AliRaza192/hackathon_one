import {
  NavbarArray,
  NavbarItemType,
} from "@/app/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi";
import React, { FC, useState } from "react";

const Expend: FC<{ item: NavbarItemType }> = ({ item }) => {
  const [isExpended, setExpended] = useState<boolean>(false);
  const [isTimeOut, setTimeOut] = useState<boolean>(false); 


  function handleExpend(){
    setExpended(!isExpended);
    setTimeout(() => {
      setTimeOut(!isTimeOut);
    }, 100);
  }

  return (
    <li className={`${isExpended ? "h-48" : "h-12"} duration-300 list-none border`}>
      <div
        onClick={handleExpend}
        className="flex items-center py-2 px-3 hover:bg-purple-300 rounded-md duration-300 justify-between"
      >
        <Link href={item.href}>{item.label}</Link>
        {item.isDropDown ? (
          <HiOutlineChevronDown
            className="mt-1 -rotate-180 group-hover:rotate-0 duration-300 "
            size={16}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col space-y-1 mt-2">
        {" "}
        {isTimeOut &&
          item.DropDownData?.map((subItem: NavbarItemType, index: number) => (
            <Link
              className="hover:bg-gray-100 py-1 rounded-md px-5 duration-300"
              href={subItem.href}
            >
              {subItem.label}
            </Link>
          ))}
      </div>
    </li>
  );
};

export default Expend;
