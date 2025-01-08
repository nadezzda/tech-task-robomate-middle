import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from "@mui/material";
import { Formik, Form } from "formik";
import { TOrder } from "../../types/order";
import { itemSchema } from "../../schemas";
import FormField from "../form-field";
import { itemFormFields } from "../../lib/constants";

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
  const initialValues: TOrder = orderData || {
    orderId: 0,
    createdAt: new Date().toISOString(),
    status: "Pending",
    customer: { name: "", email: "", phone: "" },
    totalAmount: 0,
    items: [],
  };

  const handleSubmit = (values: TOrder) => {
    onSave(values);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{orderData ? "Edit Order" : "Add Order"}</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={itemSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <DialogContent>
            <Grid container spacing={3}>
              {itemFormFields.map((field) => (
                <Grid item xs={12} key={field.name}>
                  <FormField
                    label={field.label}
                    name={field.name}
                    type={field.type}
                  />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="error" variant="outlined">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default OrderDialog;
