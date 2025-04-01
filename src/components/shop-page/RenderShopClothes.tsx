import Image from "next/image";
import { ClothingItem } from "@/lib/types/types";
import { RenderShopClothesProps } from "@/lib/types/types";
import Link from "next/link";

function RenderShopClothes({ clothes }: RenderShopClothesProps) {
  return(
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {
        clothes.map((item: ClothingItem) => (
          <article 
            key={item.id} 
            className="flex flex-col items-center border-[1px] border-gray-200
            cursor-pointer transition-all ease-in-out duration-500 hover:scale-95"
            aria-label={`View ${item.name} Product`}
          >
            <div className="relative w-[450px] h-[450px] md:w-full md:h-[472px]">
              <Image 
                src={`/assets/images${item.frontImg}`} 
                alt={`Image of ${item.name}`}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p >{item.name.toLowerCase()}</p>
            <div className="flex flex-col items-center mt-3">
              <p className="mb-1">$ {item.price}</p>
              <Link 
                aria-label={`Buy ${item.name}`} 
                className="relative inline-block group font-semibold 
                cursor-pointer p-1 mb-3 transition-all ease-in-out 
                duration-500 text-gray-900 hover:text-black"
                href={`/item?id=${item.id}`}
              >
                BUY THIS ONE
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 
                  transition-all duration-300 ease-out group-hover:w-full
                  group-hover:left-0 group-hover:right-auto bg-black`}
                ></span>
              </Link>  
            </div>
          </article>
        ))
      }
    </ul>
  )
}

export default RenderShopClothes