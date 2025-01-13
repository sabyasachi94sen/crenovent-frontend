'use client';
import React from "react";
import {data} from '@/utils/data'
import { usePathname } from 'next/navigation'
import { ProductItems } from "@/components/ProductItems";

const Index=()=>{

    const {productList}=data;
    const path=usePathname()?.split("/")[2];
    console.log(path,'path');
    

    return (
        <>
         {productList[path]?
          <ProductItems items={productList[path]} />
                  :
          <>No data found</>
        }
        </>
    )

}


export default Index ;