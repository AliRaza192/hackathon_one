import React, { FC } from 'react'



async function fetchAllProductsData(){
    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-08/data/query/production?query=*%5B_type+%3D%3D+%22products%22%5D`,{
      next: {
        revalidate: 60
      }
    });
  
    if(!res.ok){
      throw new Error("Faild to fetch")
    }
  
    return res.json();
  }



const Female= async ({params}: {params: {ftype: string}}) => {
    let res = await fetchAllProductsData();
    console.log(res);
    
  return (
    <div>{params.ftype}</div>
  )
}

export default Female