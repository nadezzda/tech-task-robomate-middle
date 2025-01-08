import { TOrder } from "../types/order";

export const orders: TOrder[] = [
  {
    orderId: 1,
    createdAt: "2025-01-01T08:00:00Z",
    status: "Pending",
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+380501234567",
    },
    totalAmount: 99.99,
    items: [
      { itemId: 101, name: "Laptop", quantity: 1, price: 999.99 },
      { itemId: 102, name: "Mouse", quantity: 1, price: 19.99 },
    ],
  },
  {
    orderId: 2,
    createdAt: "2025-01-02T09:15:00Z",
    status: "Shipped",
    customer: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+380505567890",
    },
    totalAmount: 59.99,
    items: [{ itemId: 103, name: "Smartphone", quantity: 1, price: 59.99 }],
  },
  {
    orderId: 3,
    createdAt: "2025-01-03T10:30:00Z",
    status: "Delivered",
    customer: {
      name: "Alice Brown",
      email: "alicebrown@example.com",
      phone: "+380506876543",
    },
    totalAmount: 249.99,
    items: [{ itemId: 104, name: "Tablet", quantity: 1, price: 249.99 }],
  },
  {
    orderId: 4,
    createdAt: "2025-01-04T11:45:00Z",
    status: "Cancelled",
    customer: {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      phone: "+380507987654",
    },
    totalAmount: 79.99,
    items: [{ itemId: 105, name: "Headphones", quantity: 1, price: 79.99 }],
  },
  {
    orderId: 5,
    createdAt: "2025-01-05T12:00:00Z",
    status: "Pending",
    customer: {
      name: "David Clark",
      email: "davidclark@example.com",
      phone: "+380508432198",
    },
    totalAmount: 349.99,
    items: [{ itemId: 106, name: "Smartwatch", quantity: 1, price: 349.99 }],
  },
];

interface FormFieldConfig {
  name: string;
  label: string;
  type: "email" | "text" | "tel" | "number" | "password";
}

export const itemFormFields: FormFieldConfig[] = [
  {
    name: "customer.email",
    label: "Customer Email",
    type: "email",
  },
  {
    name: "customer.name",
    label: "Customer Name",
    type: "text",
  },
  {
    name: "customer.phone",
    label: "Customer Phone",
    type: "tel",
  },
  {
    name: "totalAmount",
    label: "Total Amount",
    type: "number",
  },
];

export const loginFormFields: FormFieldConfig[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];
