"use client";

import MenuSVG from "../../../../public/assets/icons/MenuSVG";
import CloseSVG from "../../../../public/assets/icons/CloseSVG";
import RenderNavOptions from "./RenderNavOptions";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const path = usePathname();
  const homeHREF = '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <button
      id="menu-button"
      className={`${
        isMenuOpen ? 'absolute top-0 left-0 w-full h-full z-20' : ''
      } xl:hidden cursor-pointer z-20`}
      onClick={toggleMenu}
    >
      {isMenuOpen ? (
        <>
          <CloseSVG color1="#000" />
          <RenderNavOptions
            ulClasses="bg-white z-[999] w-full h-[100vh] flex items-center justify-center flex-col gap-8"
            liClasses="relative font-semibold tracking-wider text-3xl z-[999] md:text-5xl"
          />
        </>
      ) : (
        <MenuSVG color1={`${path !== homeHREF ? "#000" : "#fff"}`} />
      )}
    </button>
  );
}

export default MobileMenu;
