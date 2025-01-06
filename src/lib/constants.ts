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
  {
    orderId: 6,
    createdAt: "2025-01-06T13:00:00Z",
    status: "Shipped",
    customer: {
      name: "Eve White",
      email: "evewhite@example.com",
      phone: "+380509876543",
    },
    totalAmount: 199.99,
    items: [{ itemId: 107, name: "Speaker", quantity: 2, price: 99.99 }],
  },
  {
    orderId: 7,
    createdAt: "2025-01-07T14:30:00Z",
    status: "Delivered",
    customer: {
      name: "Frank Harris",
      email: "frankharris@example.com",
      phone: "+380501112233",
    },
    totalAmount: 129.99,
    items: [
      { itemId: 108, name: "Keyboard", quantity: 1, price: 49.99 },
      { itemId: 109, name: "Mousepad", quantity: 1, price: 19.99 },
    ],
  },
  {
    orderId: 8,
    createdAt: "2025-01-08T15:00:00Z",
    status: "Pending",
    customer: {
      name: "Grace Lee",
      email: "gracelee@example.com",
      phone: "+380502211334",
    },
    totalAmount: 89.99,
    items: [
      { itemId: 110, name: "Bluetooth Headphones", quantity: 1, price: 89.99 },
    ],
  },
  {
    orderId: 9,
    createdAt: "2025-01-09T16:00:00Z",
    status: "Shipped",
    customer: {
      name: "Henry King",
      email: "henryking@example.com",
      phone: "+380503443233",
    },
    totalAmount: 159.99,
    items: [
      { itemId: 111, name: "Smartphone Case", quantity: 2, price: 29.99 },
      { itemId: 112, name: "Screen Protector", quantity: 2, price: 10.99 },
    ],
  },
  {
    orderId: 10,
    createdAt: "2025-01-10T17:30:00Z",
    status: "Delivered",
    customer: {
      name: "Ivy Davis",
      email: "ivydavis@example.com",
      phone: "+380504334455",
    },
    totalAmount: 449.99,
    items: [
      { itemId: 113, name: "Laptop Bag", quantity: 1, price: 59.99 },
      { itemId: 114, name: "Laptop Stand", quantity: 1, price: 49.99 },
      { itemId: 115, name: "Wireless Charger", quantity: 1, price: 39.99 },
      { itemId: 116, name: "USB-C Cable", quantity: 2, price: 10.99 },
    ],
  },
  {
    orderId: 11,
    createdAt: "2025-01-11T18:00:00Z",
    status: "Cancelled",
    customer: {
      name: "Jack Moore",
      email: "jackmoore@example.com",
      phone: "+380505556677",
    },
    totalAmount: 59.99,
    items: [{ itemId: 117, name: "Camera Lens", quantity: 1, price: 59.99 }],
  },
];

