"use client"

import MenuSVG from "../../../../public/assets/icons/MenuSVG";
import CloseSVG from "../../../../public/assets/icons/CloseSVG";
import RenderNavOptions from "./RenderNavOptions";
import { useState } from "react";
import { usePathname } from "next/navigation";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const path = usePathname();
  const homeHREF = '/';
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <button id="menu-button" className="xl:hidden cursor-pointer" onClick={toggleMenu}>
      {
        isMenuOpen ? (
        <>
          <CloseSVG color1={`${path !== homeHREF ? "#000" : "#fff"}`} />
          <RenderNavOptions ulClasses='absolute'/>
        </>
      ) : (
        <>
          <MenuSVG color1={`${path !== homeHREF ? "#000" : "#fff"}`} />
        </>
      )
      }
    </button>
  )
}

export default MobileMenu