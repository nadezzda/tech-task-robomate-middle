import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import Header from "../../components/header/header";
import AddOrderButton from "../../components/items-page/add-order-button";
import OrderTable from "../../components/items-page/items-table";
import OrderDialog from "../../components/items-page/order-dialog";
import useOrderDialog from "../../hooks/useOrderDialog";
import useOrders from "../../hooks/useOrders";
import { TOrder } from "../../types/order";

const ItemsPage: React.FC = () => {
  const { items: orders } = useSelector((state: RootState) => state.orders);
  const { dialogOpen, currentOrder, openDialog, closeDialog } =
    useOrderDialog();
  const { saveOrder } = useOrders();

  const handleAddOrder = () => openDialog();

  const handleEditOrder = (order: TOrder) => openDialog(order);

  const handleSaveOrder = (order: TOrder) => {
    saveOrder(order, currentOrder);
    closeDialog();
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
          onClose={closeDialog}
          onSave={handleSaveOrder}
          orderData={currentOrder}
        />
      </Box>
    </Fragment>
  );
};

export default ItemsPage;
