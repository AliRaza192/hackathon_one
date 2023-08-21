import Image from "next/image";
import React from "react";
import Promote1 from "@/app/components/assets/Images/promote.webp";
import Promote2 from "@/app/components/assets/Images/promote2.webp";
import Promote3 from "@/app/components/assets/Images/promote3.webp";

const ProductTypes = () => {
  return (
    <div className="py-16 px-2 space-y-5">
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-950 font-bold">
          Our Promotions Events
        </h3>
      </div>

      {/* grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 text-gray-800">
        {/* first grid */}
        <div className="w-full flex flex-col items-center justify-between sm:flex-row col-span-1 md:col-span-2 bg-cart1 px-12">
          <div className="max-w-[13rem] py-8">
            <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
            <p className="text-xl">For the summer season</p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              src={Promote1}
              alt="Event Promot1"
            />
          </div>
        </div>
        {/* second grid */}
        <div className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cart2">
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$75.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              src={Promote2}
              alt="Event Promot2"
            />
          </div>
        </div>
        {/* third grid */}
        <div className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cart3">
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$75.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              src={Promote3}
              alt="Event Promot3"
            />
          </div>
          {/* four grid */}
        </div>
        <div className="py-10 text-white  w-full col-auto md:col-span-2 bg-cart4 flex flex-col justify-center items-center space-y-3">
          <h3 className="font-extrabold text-4xl">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button className="py-1 px-8 text-lg font-medium bg-gray-600 rounded-lg tracking-widest">
            DINEWEEKENDSALE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;
