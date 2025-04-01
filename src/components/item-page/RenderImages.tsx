"use client"

import { useState } from "react";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import ArrowRight from "../../../public/assets/icons/ArrowRight";
import Image from "next/image";
import { RenderImagesProps } from "../../lib/types/types"

function RenderImages({ name, backImg, frontImg }: RenderImagesProps) {
  const [changeImg, setChangeImg] = useState(false);

  const handleImgChange = () => {
    setChangeImg(!changeImg);
  }

  return (
    <div className="relative md:hidden">
      <div className="">
        <Image 
          src={`/assets/images${changeImg ? backImg : frontImg}`} 
          alt={`Image of ${name}`}
          width={380}
          height={380}
        />
      </div>
      <button onClick={handleImgChange} className={`${changeImg ? 'inline-block' : 'hidden'}`}>
        <ArrowLeft className={'absolute left-0 top-1/2 transform -translate-y-1/2'}/>
      </button>
      <button 
        onClick={handleImgChange} 
        className={`${changeImg ? 'hidden' : 'inline-block'}`}
      >
        <ArrowRight className={'absolute right-0 top-1/2 transform -translate-y-1/2'}/>
      </button>
    </div>
  )
}

export default RenderImages