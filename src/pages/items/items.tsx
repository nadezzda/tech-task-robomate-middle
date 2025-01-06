import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { orders } from "../../lib/constants";
import OrderDialog from "../../components/order-dialog";
import { TOrder } from "../../types/order";

const ItemsPage: React.FC = () => {
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
    console.log("Saved order:", order);
    setDialogOpen(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleAddOrder}
      >
        Add Order
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => handleEditOrder(order)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <OrderDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSave={handleSaveOrder}
        orderData={currentOrder}
      />
    </Box>
  );
};

export default ItemsPage;
