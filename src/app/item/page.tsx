"use client"

import RenderImages from "@/components/item-page/RenderImages";
import getItemById from "@/lib/helpers/getItemById";
import Image from "next/image";
import AddToCartBtn from "@/components/item-page/AddToCartBtn";
import StoreProvider from "@/lib/services/StoreProvider";
import { ClothingItem } from "@/lib/types/types";
import { Suspense } from "react";

function ItemPage() {
  const item = getItemById() as ClothingItem;

  if (item === undefined) {
    return <p>Item not found or loading...</p>;
  }

  return (
    <section>
      <article className="flex flex-col justify-center items-center">
        <p className="w-full flex justify-center items-center border-t-2
        border-b-2 border-gray-200 font-semibold tracking-widest"
        >
          /{item.category}/{item.name.toLowerCase()}
        </p>        
        <RenderImages name={item.name} backImg={item.backImg} frontImg={item.frontImg} />

        <div className="hidden md:relative md:flex md:w-full md:h-[100vh]">
          <div className='absolute inset-0 bg-black opacity-10 z-5'></div>
          <div className="w-1/2 h-full relative">
            <Image 
              src={`/assets/images${item.frontImg}`} 
              alt={`Front Image of ${item.name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full w-[2px] bg-black"></div>
          <div className="w-1/2 h-full relative">
            <Image 
              src={`/assets/images${item.backImg}`} 
              alt={`Back Image of ${item.name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="bg-white 
        md:w-[210px] md:h-[200px] md:flex md:flex-col md:items-center md:justify-center md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10
        xl:w-[310px] xl:h-[300px]
        ">
          <div className="flex flex-col justify-center items-center gap-4 mt-6">
            <p className="text-lg font-semibold tracking-wider md:text-2xl">{item.name}</p>
            <p className="text-lg font-semibold tracking-wider md:text-2xl">$ {item.price}</p>
          </div>
          <StoreProvider>
            {/* The case in which item is equal to undefined could't happen. So this error can be ignored (It could be ignored???)*/}
            <AddToCartBtn item={item}/>
          </StoreProvider>
        </div>
      </article>
    </section> 
  )
}

function SuspendedItemPage() {
  return (
    <Suspense fallback={<div>Loading item...</div>}>
      <ItemPage />
    </Suspense>
  );
}

export default SuspendedItemPage;

