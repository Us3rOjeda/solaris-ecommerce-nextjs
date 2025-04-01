"use client"

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import RenderNavOptions from "./RenderNavOptions";
import { usePathname } from "next/navigation";
import UserSVG from "../../../../public/assets/icons/UserSVG";
import CartSVG from "../../../../public/assets/icons/CartSVG";
import { useState } from "react";
import Cart from "./Cart";
import StoreProvider from "@/lib/services/StoreProvider";

function Navbar() {
  const path = usePathname();
  const homeHREF = '/';
  const [isMyCartActive, setIsMyCartActive] = useState(false);

  const handleMyCart = () => {
    setIsMyCartActive((prevState) => !prevState);
  };

  return(
    <header 
      id='navbar-header' 
      className={`w-full flex justify-between items-center p-8 z-10 bg-transparent
      xl:justify-center
      ${path !== homeHREF ? "block h-20" : "absolute xl:fixed"}
      `}
    >
      <div 
      className={`${isMyCartActive ? 'absolute' : 'hidden'} h-full inset-0 bg-black opacity-40 z-[100]`}
      onClick={handleMyCart}
      ></div>

      <div className="w-full flex flex-row justify-between xl:w-[80%]">
        <Link href='/' id="header-logo" 
          className={`
            flex items-center text-4xl font-bold  tracking-wide select-none
            xl:text-3xl
            ${path !== homeHREF ? "text-black" : "text-white"}
          `}
        >
          SOLARIS
        </Link>
        <nav 
          className="flex justify-between items-center
          "
        >
          
          <MobileMenu />
          <RenderNavOptions 
            ulClasses={`hidden xl:flex gap-12 ${path !== homeHREF ? "text-gray-800" : "text-white"}`}
            liClasses="text-xl relative inline-block group"
            linkClasses={`transition-colors duration-300 ${path !== homeHREF ? "hover:text-black" : "hover:text-gray-300"}`}
            spanClasses={`absolute bottom-0 left-0 w-0 h-0.5  transition-all 
            duration-300 ease-out group-hover:w-full group-hover:left-0 group-hover:right-auto
            ${path !== homeHREF ? "bg-black" : "bg-white"}`}
          />
        </nav>
        <div className="hidden justify-center items-center gap-12 xl:flex">
          <button 
            aria-label="My Account"
            className="cursor-pointer"
          >
            <UserSVG color1={`${path !== homeHREF ? "#000" : "#fff"}`} />
          </button>
          <button aria-label="My Cart" className="cursor-pointer" onClick={handleMyCart}>
            <CartSVG color1={`${path !== homeHREF ? "#000" : "#fff"}`} />
          </button>
        </div>
      </div>
      <StoreProvider>
        <Cart isMyCartActive={isMyCartActive} handleMyCart={handleMyCart}/>
      </StoreProvider>
    </header>
  )
}

export default Navbar;

// ESTUDIAR ARIA PROPERTIES
// data-testid="cart"
// aria-expanded="false"
// aria-haspopup="dialog"
// aria-controls="minicart-flyout-container"