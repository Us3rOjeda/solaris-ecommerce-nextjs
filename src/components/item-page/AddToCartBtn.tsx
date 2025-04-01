import useCartActions from "@/lib/hooks/useCartActions"
import { ClothingItem } from "@/lib/types/types";

function AddToCartBtn({ item }: { item: ClothingItem }) {
  const { handleAddItemToCart } = useCartActions()

  return (
    <button 
      id={`btn-for-${item.id}`}
      className="btn-custom-no-absolute cursor-pointer items-center z-10 w-[170px] text-sm mt-6
      flex justify-center text-white bg-black font-tight xl:bottom-4 h-[40px] tracking-wider
      transition-all hover:scale-97 aease-in-out duration-500"
      onClick={() => handleAddItemToCart(item.id)}
    >
      ADD TO CART
    </button>
  )
}
 
export default AddToCartBtn