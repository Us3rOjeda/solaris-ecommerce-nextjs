import { useAppSelector } from "@/lib/hooks/useAppDispatch";
import Image from "next/image";
import Link from "next/link";
import CloseSVG from "../../../../public/assets/icons/CloseSVG";
CloseSVG
function Cart({ isMyCartActive, handleMyCart }: {isMyCartActive: boolean, handleMyCart: () => void }) {
  const cart = useAppSelector(state => state.cart);

  return (
    <>
      <aside className={`${isMyCartActive ? 'absolute' : 'hidden'} w-[500px] h-[100vh] bg-white top-0 right-0 z-[999]`}>
        <header className="p-10">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-300 text-4xl tracking-wider italic">My Cart</h1>
            <button className="cursor-pointer" onClick={handleMyCart}>
              <CloseSVG color1="#d1d5dc"/>
            </button>
          </div>
          <span className="absolute bg-gray-300 w-[23vw] h-0.5 mt-6"></span>
        </header>
        <ul>
          {
            isMyCartActive ? (
              cart.slice(0, 3).map(({id, name, frontImg, price, quantity}) => (
                <li key={id} className="p-10">
                  <div className="flex gap-6">

                    {/* IMAGE DIV */}
                    <div 
                      id={`${name}-front-image`} 
                      className="relative w-30 h-30 rounded-sm"
                    >
                      <Image
                        src={`/assets/images${frontImg}`}
                        alt={`Thumbnail of ${name}`}
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>

                    {/* DETAILS DIV */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="text-2xl font-semibold tracking-wider">{name}</p>
                        <p className="text-xl tracking-widest text-gray-900">${price}</p>
                      </div>  
                      <p className="text-md tracking-wider text-gray-700">Quantity: {quantity}</p>
                    </div>
                  </div>
                </li>
              ))
            ) : null
          }
        </ul>
        <div className="flex flex-col p-10 ">
          <span className="absolute bg-gray-300 w-[23vw] h-0.5 mb-6"></span>
          <div className="flex flex-col items-center">
            <button 
              className="btn-custom-no-absolute cursor-pointer items-center z-10 w-[230px] text-sm mt-6
              flex justify-center text-white bg-black font-tight xl:bottom-4 h-[40px] tracking-wider
              transition-all hover:scale-97 aease-in-out duration-500"
            >
              COMPLETE THE PURCHASE
            </button>
            <Link
              href='/cart'
              className="btn-custom-no-absolute cursor-pointer items-center z-10 w-[229px] text-sm mt-6
              flex justify-center border-black border-[1px] text-black bg-white font-tight xl:bottom-4 h-[36px] tracking-wider
              transition-all hover:scale-97 aease-in-out duration-500"
              onClick={handleMyCart}
            >
              VIEW ALL MY CART
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Cart;