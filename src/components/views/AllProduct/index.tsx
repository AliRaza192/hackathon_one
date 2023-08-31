// "use client"

// import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
// import { Component } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import BASE_PATH_FORAPI from "@/components/shared/BasePath";
// import Card from "../Card";

// interface propsType {
//   productArray: Array<oneProductType>
// }

// export default class AllProductsCompo extends Component<{ ProductData: propsType }> {
//   start: number = 10;
//   end: number = 20;
//   state: {items: Array<oneProductType>, hasMore: boolean} = {
//     items:  [...this.props.ProductData.productArray],
//     hasMore: true,
//   }
//   fetchDataFromApiGradually = async (start: number, end: number) => {
//     const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`);
//     const dataToCheckAndSend = await res.json();
//     if(dataToCheckAndSend.productArray === "Not Found"){
//       this.setState({hasMore: false})
//     }
//     return dataToCheckAndSend;
//     // return res.json()
    
//   }
//   getData = async () => {
//     let allTogether = await this.fetchDataFromApiGradually(this.start, this.end);
//     if(allTogether.productArray !== "Not Found") {
//       this.setState({
//         items: this.state.items.concat(allTogether.productArray)
//       })

//     }else{
//         this.setState({
//           hasMore: false
//         })
//       }
         
//       this.start = this.start + 10
//       this.end = this.end + 20
//     }
  
//   render() {
//     return (
     
//         <InfiniteScroll
//           dataLength={this.state.items.length} //This is important field to render the next data
//           next={this.getData}
//           hasMore={this.state.hasMore}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: "center" }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }
//           className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 ga"
//         >
//           {this.state.items.map((item: oneProductType, index:number)=>(
//             <Card key={index} singleProductData={item}/>
//           ))}
//         </InfiniteScroll>
      
//     );
//   }
// }


"use client"
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { Component } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import CardAll from "../CardAll";

interface propsType {
    productArray: Array<oneProductType>
}

export default class AllProductsCompo extends Component<{ ProdutcData: propsType }> {
    start: number = 10;
    end: number = 20;
    state: { items: Array<oneProductType>, hasMore: boolean } = {
        items: [...this.props.ProdutcData.productArray],
        hasMore: true,
    }
    fetchDataFromApiGradually = async (start: number, end: number) => {
        const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`);
        const dataToCheckAndSend = await res.json();
        if (dataToCheckAndSend.productArray === "Not found") {
            this.setState({ hasMore: false })
        }
        return dataToCheckAndSend;
    }
    getData = async () => {
        let allTogether = await this.fetchDataFromApiGradually(this.start, this.end);
        if (allTogether.productArray !== "Not found") {
            this.setState({
                items: this.state.items.concat(allTogether.productArray)
            })
        } else {
            this.setState({
                hasMore: false
            })
        }
        this.start = this.start + 10;
        this.end = this.end + 10;
    }
    render() {
        return (
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.getData}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                className="content-center justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
            >
                {this.state.items.map((item: oneProductType, index: number) => (
                    <CardAll key={index} singleProductData={item} />
                ))}
            </InfiniteScroll>
        )
    };
}


