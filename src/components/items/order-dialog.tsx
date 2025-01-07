import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TOrder } from "../../types/order";
import { itemSchema } from "../../schemas";

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
        {({ handleChange, values, touched, errors }) => (
          <Form>
            <DialogContent>
              <Field
                as={TextField}
                name="customer.email"
                margin="normal"
                fullWidth
                label="Customer Email"
                value={values.customer.email}
                onChange={handleChange}
                error={touched.customer?.email && !!errors.customer?.email}
                helperText={
                  touched.customer?.email && errors.customer?.email
                    ? errors.customer?.email
                    : ""
                }
              />
              <Field
                as={TextField}
                name="customer.name"
                margin="normal"
                fullWidth
                label="Customer Name"
                value={values.customer.name}
                onChange={handleChange}
                error={touched.customer?.name && !!errors.customer?.name}
                helperText={
                  touched.customer?.name && errors.customer?.name
                    ? errors.customer?.name
                    : ""
                }
              />
              <Field
                as={TextField}
                name="customer.phone"
                margin="normal"
                fullWidth
                label="Customer Phone"
                value={values.customer.phone}
                onChange={handleChange}
                error={touched.customer?.phone && !!errors.customer?.phone}
                helperText={
                  touched.customer?.phone && errors.customer?.phone
                    ? errors.customer?.phone
                    : ""
                }
              />
              <Field
                as={TextField}
                name="totalAmount"
                margin="normal"
                fullWidth
                label="Total Amount"
                type="number"
                value={values.totalAmount}
                onChange={handleChange}
                error={touched.totalAmount && !!errors.totalAmount}
                helperText={
                  touched.totalAmount && errors.totalAmount
                    ? errors.totalAmount
                    : ""
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="error"             variant="outlined"
              >
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default OrderDialog;
