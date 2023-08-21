import React from 'react'
import BASE_PATH_FORAPI from '@/app/components/shared/BasePath'
import AllProductsCompo from '@/app/components/views/AllProductData/Index'


async function fetchAllProductData(){
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`,{
        next: {
            revalidate: 120
        }
    })

        if(!res.ok){
            throw new Error("Failed to Fetch")
        }
    return res.json()
    
}



const Products = async () => {
    const ProductData = await fetchAllProductData()
    
  return (
    <div>
        <AllProductsCompo ProductData={ProductData}/>
    </div>
  )
}

export default Products