import { ClothingItemWithQuantity } from "../types/types";

const getInitialState = (): ClothingItemWithQuantity[] => { 
  if (typeof window === "undefined") return [];

  const DEFAULT_STATE: null[] = [];

  const initialState: ClothingItemWithQuantity[] | [] = (() => {
    const persistedState = localStorage.getItem("__redux__state__");
    return persistedState ? JSON.parse(persistedState).cart : DEFAULT_STATE;
  })();

  return initialState
}

export default getInitialState