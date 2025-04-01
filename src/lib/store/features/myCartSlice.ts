import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import getInitialState from "../../helpers/getInitialState"
import { ClothesId } from "../../types/types";
import { ClothingItem } from "../../types/types";
import Clothes from "../../../mocks/clothes.json"

const initialState = getInitialState();

export const myCartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ClothesId | undefined>) => {
      const id = action.payload;
      const foundedItem = Clothes.find((item) => item.id === id) as ClothingItem;

      const doesItemExist = state.some((item) => item.id === foundedItem.id);
      
      if (doesItemExist) {
        return state.map((item) => 
          item.id === foundedItem.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...state, { ...foundedItem, quantity: 1 }];
      }
    },
    removeItemFromCart: (state, action : PayloadAction<ClothesId | undefined>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    updateItemQuantity: (state, action: PayloadAction<{ id: ClothesId | undefined, quantity: number }>) => {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        return state.filter((item) => item.id !== id);
      }

      return state.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }
  },
});

export const { 
  addItemToCart, 
  removeItemFromCart,
  updateItemQuantity
 } = myCartSlice.actions; 

export default myCartSlice.reducer;
