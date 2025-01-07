import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { addOrder, updateOrder } from "../../features/itemsSlice";
import OrderDialog from "../../components/items/order-dialog";
import { TOrder } from "../../types/order";
import Header from "../../components/header";
import AddOrderButton from "../../components/items/add-order-button";
import OrderTable from "../../components/items/items-table";

const ItemsPage: React.FC = () => {
  const { items: orders } = useSelector((state: RootState) => state.orders);
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<TOrder | null>(null);

  const handleAddOrder = () => {
    setCurrentOrder(null);
    setDialogOpen(true);
  };

  const handleEditOrder = (order: TOrder) => {
    setCurrentOrder(order);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSaveOrder = (order: TOrder) => {
    if (currentOrder?.orderId) {
      dispatch(updateOrder({ orderId: order.orderId, updatedData: order }));
    } else {
      dispatch(addOrder(order));
    }
    setDialogOpen(false);
  };

  return (
    <Fragment>
      <Header />
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Orders
        </Typography>
        <AddOrderButton onClick={handleAddOrder} />
        <OrderTable orders={orders} onEdit={handleEditOrder} />
        <OrderDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          onSave={handleSaveOrder}
          orderData={currentOrder}
        />
      </Box>
    </Fragment>
  );
};

export default ItemsPage;
