import { createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { SanityClient } from "sanity";
import { client } from "../../../../sanity/lib/client";
import { oneProductType } from "@/app/components/utils/ProductsDataArrayAndType";
// import { dataset } from "../../../sanity/env";

// let client: SanityClient = createClient({
//     projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
//     dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
//     apiVersion: "2022-03-25",
//     useCdn: false
// });


export async function GET(request: NextRequest){
    const orignalData: Array<oneProductType> = [];
    const url = request.nextUrl.searchParams;

    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-08/data/query/production?query=*%5B_type+%3D%3D+%22products%22%5D`)
    let dataFrom_API = await res.json();
    orignalData.push(...dataFrom_API.result)

    if(url.has("start")|| url.has("end")){
        if(orignalData[Number(url.get("start"))]){
            let productArray = orignalData.slice(Number(url.get("start")), Number(url.get("end")))
            return NextResponse.json({productArray})
        }
        return NextResponse.json({productArray: "Not Found"})
    }

    return NextResponse.json({orignalData})



    // try{
    //     let response = await client.fetch(`*[_type == "products"]`);
    //     console.log(response);
        
    //     return NextResponse.json({response})

    // }catch(error){
    //     console.log((error as {message: string}).message);
    //     return NextResponse.json({"Error": error})
    // }
    
};