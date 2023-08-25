;import Image from 'next/image'
import Hero from '@/components/views/Navbar/Hero/Index'
import ProductTypes from '@/components/views/ProductTypes'
import BASE_PATH_FORAPI from '@/components/shared/BasePath';
import ProductCarousel from '@/components/views/ProductCarousel';
import { responseType } from '@/components/utils/ProductsDataArrayAndType';
import Jewellery from '@/components/views/Jewellery/Index';
import NewLetter from '@/components/views/Newsletter/Index';



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

export default async function Home() {
  let {result}: responseType = await fetchAllProductsData();
  
  return (
   
   <div>
    <Hero/>
    <ProductTypes/>
    <ProductCarousel ProductData={result}/>
    <Jewellery/>
    <NewLetter/>
   </div>
    )
}
