"use client"

import getFirstCategoryElement from "@/lib/helpers/getFirstCategoryElement";
import { ClothingItem } from "@/lib/types/types";
import Clothes from "../../../mocks/clothes.json"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function RenderCategoryEl() {
  const firstElementsByCategory = getFirstCategoryElement(Clothes as ClothingItem[]);
  const [category, setCategory] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const handleCategoryValue = () => {
      router.push(`/shop?category=${category}`);
    }
  }, [category])

  return(
    <ul className="grid grid-cols-2 justify-center items-center mt-10 gap-4
    xl:flex xl:gap-10
    ">
      {
        firstElementsByCategory.map((item: ClothingItem) => (
          <article className="flex flex-col items-center" key={item.id}>
            <li
              className='relative w-[160px] h-[230px] cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-95
              sm:w-[300px] sm:h-[400px]
              md:w-[350px] md:h-[450px]
              lg:w-[500px] lg:h-[600px]
              xl:w-[400px] xl:h-[500px]'
              onClick={() => setCategory(item.category)}
            >
              <Link href={`/shop?category=${item.category}`}>
                <Image
                  src={`/assets/images${item.frontImg}`}
                  alt={`Image of ${item.name} in the ${item.category} category`}
                  layout='fill'
                  objectFit='cover'
                  className="saturate-105 brightness-100 contrast-110"
                />
              </Link>
              </li>
            <p className='tracking-wider left-5 text-black text-3xl mt-8'>
              {item.category.toUpperCase()}
            </p>
          </article>
        ))
      }
    </ul>
  )
}

export default RenderCategoryEl