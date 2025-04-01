import { useAppDispatch } from "@/lib/hooks/useAppDispatch";
import { addItemToCart, removeItemFromCart,updateItemQuantity  } from "@/lib/store/features/myCartSlice";
import { ClothesId } from "@/lib/types/types";

function useCartActions() {
  const dispatch = useAppDispatch();

  const handleAddItemToCart = (id: ClothesId) => {
    dispatch(addItemToCart(id));
  };

  const handleRemoveItemFromCart = (id: ClothesId) => {
    dispatch(removeItemFromCart(id));
  };

  const handleupdateItemQuantity = (id: ClothesId, quantity: number) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };


  return { 
    handleAddItemToCart,
    handleRemoveItemFromCart,
    handleupdateItemQuantity
   };
}

export default useCartActions