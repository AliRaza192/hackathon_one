import Image from "next/image";
import React from "react";
import IMG from "@/components/assets/Images/product3.png";

const Jewellery = () => {
  return (
    <div className="px-1">
      <div className="flex justify-start md:justify-end text-4xl md:text-5xl font-bold py-4 text-mainHeading">
        <h6 className="max-w-[27rem]">
          Unique and Authentic Vintage Designer Jewellery
        </h6>
      </div>

      <div className="flex flex-col md:flex-row justify-between py-4 mt-2 gap-5">
        {/* left side */}

        <div className="relative basis-1/2 gap-6 lg:gap-10 grid grid-cols-2 grid-rows-2">
          <div className="absolute -z-50 text-slate-200 inset-0">
            <h6 className="text-5xl md:text-7xl lg:text-[7.3rem] leading-[5.9rem] font-bold">
              Different From Others
            </h6>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-bold text-xl">Using Good Quality Materials</h6>
            <p className="text-lg leading-5">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-bold text-xl">Using Good Quality Materials</h6>
            <p className="text-lg leading-5">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-bold text-xl">Using Good Quality Materials</h6>
            <p className="text-lg leading-5">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-bold text-xl">Using Good Quality Materials</h6>
            <p className="text-lg leading-5">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* right Side */}
        <div className="flex flex-col lg:flex-row basis-1/2">
          <div className="w-full px-4 lg:px-0 lg:w-80">
            <Image src={IMG} width={1000} height={1000} alt="" />
          </div>
          <div className="space-y-6 md:space-y-4 p-6">
            <p style={{wordSpacing:"0.8rem"}} className="h-[90%] lg:max-w-[15rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, vitae repellendus qui impedit fuga veritatis vel quisquam nemo sunt, rem magnam provident molestiae quia, est quo eveniet.</p>
            <button className="text-white bg-mainHeading rounded-md py-2 px-6">See All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
