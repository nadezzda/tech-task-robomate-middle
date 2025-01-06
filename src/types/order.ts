export type TCustomer = {
  name: string;
  email: string;
  phone: string;
};

export type TOrderItem = {
  itemId: number;
  name: string;
  quantity: number;
  price: number;
};

export type TOrder = {
  orderId: number;
  createdAt: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  customer: TCustomer;
  totalAmount: number;
  items: TOrderItem[];
};
