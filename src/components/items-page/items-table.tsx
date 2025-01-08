import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { TOrder } from "../../types/order";
import EditIcon from "@mui/icons-material/Edit";
import { getStatusChip } from "../../lib/getStatusChip";

interface OrderTableProps {
  orders: TOrder[];
  onEdit: (order: TOrder) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, onEdit }) => {

  return (
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
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>{getStatusChip(order.status)}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => onEdit(order)}
                  aria-label="edit"
                >
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} align="center">
              No orders found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default OrderTable;
