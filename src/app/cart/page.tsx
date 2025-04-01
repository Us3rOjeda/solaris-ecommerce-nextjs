"use client"

import OrderSummary from "@/components/cart-page/OrderSummary";
import RenderCartElements from "@/components/cart-page/RenderCartPage";
import StoreProvider from "@/lib/services/StoreProvider";

function CartPage() {
  return (
    <section 
      id='cart-page' 
      className="flex flex-col items-center"
    >
      <header
        style={{ 
          backgroundImage: "url('/assets/images/home-image.jpg')",
          backgroundPosition: 'right'
        }} 
        className="w-full h-42 flex justify-center items-center flex-col"
      >
        <h1 className="text-7xl tracking-widest font-extrabold text-white text-center select-none z-10">
          MY CART
        </h1>
      </header>
            
      <article 
      className="mb-12 flex flex-col gap-20
      md:flex-row
      ">
        <div className="flex flex-col p-12"> 
          <h1 className="italic text-2xl tracking-widest w-full text-center mt-4 mb-8">
            YOUR SELECTION
          </h1>
          <span className="w-full h-[2px] bg-gray-300 mb-12"></span>
          <StoreProvider>
            <RenderCartElements/>
          </StoreProvider>
        </div>
        <StoreProvider>
          <OrderSummary />
        </StoreProvider>
      </article>
    </section>
  )
}

export default CartPage
