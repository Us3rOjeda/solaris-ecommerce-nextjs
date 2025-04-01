"use client"

import Link from "next/link";
import Image from "next/image";
import Clothes from "../../../mocks/clothes.json";
import { useState } from "react";
import { ClothingItem } from '../../../lib/types/types';
import filterNewClothes from "@/lib/helpers/filterNewClothes";
import useItemId from "@/lib/hooks/useItemId";

function RenderCollectionEl() {
  const filteredClothes = filterNewClothes(Clothes as ClothingItem[]); //CORREGIR "as" ES MALA PRACTICA
  const [hoveredId, setHoveredId] = useState<string>('');
  
  return(
    <ul className="flex flex-col justify-center items-center gap-14
    xl:flex-row"
    >
      {
        filteredClothes.map((item: ClothingItem) => (
          <article 
            key={item.id}
            className="flex flex-col items-center"
            aria-label={`View ${item.name} Product`}
          >
            <div 
            className='cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-95' 
            onMouseEnter={() => setHoveredId(item.id)} 
            onMouseLeave={() => setHoveredId('')}>
              <Link href={`/item?id=${item.id}`}>
                <Image
                  src={
                    hoveredId === item.id ? 
                    `/assets/images${item.backImg}` : 
                    `/assets/images${item.frontImg}`
                  }
                  alt={item.name}
                  width={500}
                  height={600}
                  objectFit="cover"
                />
              </Link>
            </div>
            
            <h2 className={`tracking-wider left-5 text-black text-3xl mt-8`}>
              {item.name.toUpperCase()}
            </h2>
          </article>
        ))
      }
    </ul>
  )
}

export default RenderCollectionEl