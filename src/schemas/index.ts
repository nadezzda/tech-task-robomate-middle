import * as yup from "yup";

export const authSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "The password must be at least 8 characters long.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "The password must contain at least one special character (!@#$%^&*)."
    ),
});

export const itemSchema = yup.object({
  customer: yup.object({
    name: yup
      .string()
      .required("Customer name is required")
      .min(2, "Name must be at least 2 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^\+38\d{10}$/, "Enter a phone number starting with +380..."),
  }),
  totalAmount: yup
    .number()
    .required("Total amount is required")
    .min(1, "Total amount must be greater than 1"),
});
