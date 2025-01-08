/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import ItemsPage from "../pages/items/items";
import OrderTable from "../components/items-page/items-table";
import { addOrder } from "../features/itemsSlice";
import "@testing-library/jest-dom";
import { TOrder } from "../types/order";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

jest.mock("../features/itemsSlice", () => ({
  addOrder: jest.fn(),
  updateOrder: jest.fn(),
}));

describe("OrderTable Component", () => {
  const mockOrders: TOrder[] = [
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
      items: [],
    },
  ];

  test("renders order details", async () => {
    render(<OrderTable orders={mockOrders} onEdit={jest.fn()} />);

    const orderIdCell = await screen.findByText("1");
    expect(orderIdCell).toBeInTheDocument();

    const statusCell = screen.getByText("Pending");
    expect(statusCell).toBeInTheDocument();
  });
});

describe("ItemsPage Component", () => {
  const mockOrders: TOrder[] = [
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
      items: [],
    },
  ];

  beforeEach(() => {
    jest.spyOn(require("react-redux"), "useSelector").mockReturnValue({
      orders: { items: mockOrders },
    });
  });

  test("opens and saves new order", async () => {
    const dispatchMock = jest.fn();
    jest.spyOn(require("react-redux"), "useDispatch").mockReturnValue(dispatchMock);

    render(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <ItemsPage />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText(/add order/i));
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/customer email/i), {
        target: { value: "newcustomer@example.com" },
      });
      fireEvent.change(screen.getByLabelText(/customer name/i), {
        target: { value: "Jane Doe" },
      });
      fireEvent.change(screen.getByLabelText(/customer phone/i), {
        target: { value: "+380507654321" },
      });
      fireEvent.change(screen.getByLabelText(/total amount/i), {
        target: { value: "150.5" },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByText(/save/i));
    });

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(
      addOrder({
        orderId: 0,
        createdAt: expect.any(String),
        status: "Pending",
        customer: {
          name: "Jane Doe",
          email: "newcustomer@example.com",
          phone: "+380507654321",
        },
        totalAmount: 150.5,
        items: [],
      })
    );
  });
});
