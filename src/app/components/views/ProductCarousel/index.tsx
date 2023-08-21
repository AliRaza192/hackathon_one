"use client";

import React, { Component, FC, ReactNode } from "react";
import { oneProductType } from "../../utils/ProductsDataArrayAndType";
import Card from "../Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


// import React from "react";
// import Slider from "react-slick";


// const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ProductData}) => {
  // let dataToSend = ProductData.slice(0,3)
  // console.log(ProductData);

//   return <div className="flex">
//     {ProductData.map((item: oneProductType, Index: number) => (
//       <Card singleProductData={item}/>
//     ))}
//   </div>;
// };



// export default class ProductCarousel extends Component<{ProductData: Array<oneProductType>}>{
//   render(): ReactNode {
//     const settings = {
//           speed: 500,
//           slidesToShow: 3,
//           slidesToScroll: 1
//         };
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
              
//             }
//           },
          
//         ]
//     return(
//       <Slider {...settings}>
//         {this.props.ProductData.map((item: oneProductType, Index: number) => (
//       <Card singleProductData={item}/>
//         ))}
//       </Slider>
//     )
//   }
// }








// "use client"
// import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
// import { Component, FC, ReactNode } from "react"
// import Card from "../Card"

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {
    let initialX: number;
    let isDragging = false;
    let tabBox: any;

    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    // Desktop functions
    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        isDragging = true;
    }
    function mouseUp() {
        isDragging = false
    }

    // mobile functions
    function mouseMovesForMobile(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            var currentX = e.touches[0].clientX;
            var movementX = currentX - initialX;
            tabBox.scrollLeft -= movementX / 5;
        }
    };
    function mouseDownForMobile(e: any) {
        isDragging = true;
        initialX = e.touches[0].clientX;
    };
    let dataToItrate = ProductData.slice(0, 15);

    return (
        <div className="space-y-4">
            <div className="text-center space-y-3">
                <p className="text-blue-800 text-sm">PROMOTIONS</p>
                <h3 className="text-3xl text-mainHeading font-bold">Our Promotions Events</h3>
            </div>
            <div
                onMouseMove={mouseMoves}
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
                className="select-none flex gap-4 overflow-x-hidden scrollGrab py-4 overflow-y-hidden"
                onTouchMove={mouseMovesForMobile}
                onTouchStart={mouseDownForMobile}
                onTouchEnd={mouseUp}
            >
                {dataToItrate.map((item: oneProductType, index: number) => (
                    <Card key={index + 4} singleProductData={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductCarousel















// export default ProductCarousel;




// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


// import React from "react";
// import Slider from "react-slick";

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }

