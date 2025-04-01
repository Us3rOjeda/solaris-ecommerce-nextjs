import { useAppSelector } from "@/lib/hooks/useAppDispatch";
import useCartActions from "@/lib/hooks/useCartActions";
import Image from "next/image";

function RenderCartElements() {
  const cart = useAppSelector(state => state.cart);
  const { handleRemoveItemFromCart } = useCartActions();

  return (

    <ul className="flex flex-col gap-10 ">
      {
        cart.map(({ id, name, price, quantity, frontImg }) => (
          <li key={id} className="flex items-center flex-col gap-6 md:gap-20 md:flex-row md:justify-between">
            <div className="flex items-center gap-6">
              {/* IMAGE DIV */}
              <div 
                id={`${name}-front-image`} 
                className="relative w-24 h-24 rounded-sm"
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
                  <p className="text-xl font-semibold tracking-wider">{name}</p>
                  <p className="text-lg tracking-widest text-gray-900">${price}</p>
                </div>  
              </div>
            </div>
            <p className="text-sm tracking-wider text-gray-700 mb-">Quantity: {quantity}</p>
            <button
              onClick={() => handleRemoveItemFromCart(id)}
              className="relative inline-block group font-semibold 
              cursor-pointer p-1 mb-3 transition-all ease-in-out 
              duration-500 text-gray-900 hover:text-black"
            >
              DELETE ITEM
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 
                transition-all duration-300 ease-out group-hover:w-full
                group-hover:left-0 group-hover:right-auto bg-black`}
              ></span>
            </button>
          </li>
        )) 
      }
    </ul>
  )
}

export default RenderCartElements