import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import ordersReducer from "./itemsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
