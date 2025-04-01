import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/myCartSlice";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);

  localStorage.setItem("__redux__state", JSON.stringify(store.getState()));

};

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
