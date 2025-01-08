import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateOrder, addOrder } from "../features/itemsSlice";
import { TOrder } from "../types/order";

const useOrders = () => {
  const dispatch = useDispatch();

  const saveOrder = (order: TOrder, currentOrder: TOrder | null) => {
    if (currentOrder?.orderId) {
      dispatch(updateOrder({ orderId: order.orderId, updatedData: order }));
      toast.success("Order updated successfully!");
    } else {
      dispatch(addOrder(order));
      toast.success("Order added successfully!");
    }
  };

  return {
    saveOrder,
  };
};

export default useOrders;
