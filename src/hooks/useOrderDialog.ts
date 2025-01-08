import { useState } from "react";
import { TOrder } from "../types/order";

const useOrderDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<TOrder | null>(null);

  const openDialog = (order: TOrder | null = null) => {
    setCurrentOrder(order);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return {
    dialogOpen,
    currentOrder,
    openDialog,
    closeDialog,
  };
};

export default useOrderDialog;
