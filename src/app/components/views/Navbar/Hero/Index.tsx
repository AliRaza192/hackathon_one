import { HeaderImg } from '@/app/components/assets'
import { Feartured1, Feartured2, Feartured3, Feartured4 } from '@/app/components/assets';
import { BsCart } from "react-icons/bs";
import Image from 'next/image'
import React from 'react'

const Hero = () => {

    const btn = "Start \n Shopping";

  return (
    <div className='py-5 flex justify-between items-center px-2'>
        
        {/* left side */}
        <div className='space-y-6 max-w-sm'>
            <button className='rounded-md bg-blue-200 text-blue-950 font-medium px-4 py-2 '>Sale 70%</button>
            <h1 className='text-4xl md:text-6xl text-mainHeading font-extrabold'>An Industrial Take On Steetwear</h1>
            <p className='text-gray-600'>AnyOne can beat you but no one can beat your outfit as long as you wear Dine outfit.</p>
            <p></p>
            <button className='flex gap-3 items-center rounded-md text-lg ring-1 ring-slate-950 bg-mainHeading text-white font-semibold py-3 px-5'>
                <BsCart/>
                <p className='whitespace-pre leading-5'>
                    {btn}
                </p>
            </button>
            <div className='grid grid-flow-col md:grid-cols-2 gap-6'>
                <Image src={Feartured1} alt='FeatureImage'/>
                <Image src={Feartured2} alt='FeatureImage'/>
                <Image src={Feartured3} alt='FeatureImage'/>
                <Image src={Feartured4} alt='FeatureImage'/>
            </div>
        </div>


        {/* right side */}
        <div className='hidden md:flex bg-red-100 rounded-full'>
            <Image src={HeaderImg} alt='Header'/>
        </div>
    </div>
  )
}

export default Hero