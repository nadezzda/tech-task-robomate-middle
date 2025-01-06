import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { TOrder } from "../types/order";

interface OrderDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (order: TOrder) => void;
  orderData: TOrder | null;
}

const OrderDialog: React.FC<OrderDialogProps> = ({
  open,
  onClose,
  onSave,
  orderData,
}) => {
  const [formData, setFormData] = React.useState<TOrder>(
    orderData || {
      orderId: 0,
      createdAt: new Date().toISOString(),
      status: "Pending",
      customer: { name: "", email: "", phone: "" },
      totalAmount: 0,
      items: [],
    }
  );

  React.useEffect(() => {
    setFormData(
      orderData || {
        orderId: 0,
        createdAt: new Date().toISOString(),
        status: "Pending",
        customer: { name: "", email: "", phone: "" },
        totalAmount: 0,
        items: [],
      }
    );
  }, [orderData]);

  const handleChange = <K extends keyof TOrder>(field: K, value: TOrder[K]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCustomerChange = <K extends keyof TOrder["customer"]>(
    field: K,
    value: TOrder["customer"][K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      customer: { ...prev.customer, [field]: value },
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{orderData ? "Edit Order" : "Add Order"}</DialogTitle>
      <DialogContent>
        <TextField
          margin="normal"
          fullWidth
          label="Customer Email"
          value={formData.customer.email}
          onChange={(e) => handleCustomerChange("email", e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Customer Name"
          value={formData.customer.name}
          onChange={(e) => handleCustomerChange("name", e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Customer Phone"
          value={formData.customer.phone}
          onChange={(e) => handleCustomerChange("phone", e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Total Amount"
          type="number"
          value={formData.totalAmount}
          onChange={(e) =>
            handleChange("totalAmount", parseFloat(e.target.value) || 0)
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDialog;
