import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { oneProductType } from '@/components/utils/ProductsDataArrayAndType';
import Card from '@/components/views/Card';

async function getAllProductForSearch(){
    let response = await client.fetch(`*[_type == "products"]`);
    return response;
}

const Search = async ({params}: {params: {query: string}}) => {
    let slug = (params.query).toLowerCase()
    let data = await getAllProductForSearch()
    let dataToMap = await data.filter((item: oneProductType) => ((item.productName).toLowerCase()).indexOf(slug))

    console.log(params.query);
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-6">
        {dataToMap && dataToMap.result.map((items: oneProductType, index: number) => (
            <Card  key={index} singleProductData={items} />
        ))}    
    </div>
  )
}

export default Search