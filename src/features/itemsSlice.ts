import { createSlice } from "@reduxjs/toolkit";
import { orders } from "../lib/constants";
import { TOrder } from "../types/order";

interface ItemsState {
  items: TOrder[];
}

const initialState: ItemsState = {
  items: orders,
};

const itemsSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addOrder: (state, action) => {
      const maxOrderId = state.items.length > 0
        ? Math.max(...state.items.map((order) => order.orderId))
        : 0;

      const newOrder = {
        ...action.payload,
        orderId: maxOrderId + 1,
      };

      state.items.push(newOrder);
    },
    updateOrder: (state, action) => {
      const { orderId, updatedData } = action.payload;
      const index = state.items.findIndex((order) => order.orderId === orderId);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updatedData };
      }
    },
  },
});

export const { addOrder, updateOrder } = itemsSlice.actions;
export default itemsSlice.reducer;
