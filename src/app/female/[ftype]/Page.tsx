import { oneProductType, responseType } from '@/components/utils/ProductsDataArrayAndType';
import Card from '@/components/views/Card';
import React, { FC } from 'react'



async function fetchAllProductsData(){
  
    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-08/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+productType%5B0%5D%3D%3D+%22Female%22%5D`,{
  
  next: {
      revalidate: 60
    }
  });

  if(!res.ok){
    throw new Error("Faild to fetch")
  }

  return res.json();
}


const Female = async ({params}: {params: {ftype: string}}) => {
    let res: responseType =  await fetchAllProductsData();
    // console.log(res);
    
  return (
    
    <div className="content-center justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
        {res.result.map((items: oneProductType, index: number) => (
            <Card  key={index} singleProductData={items} />
        ))}    
    </div>
  )
}

export default Female