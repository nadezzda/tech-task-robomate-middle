/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/header";
import { logout } from "../features/authSlice";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockStore = configureStore([]);

describe("Header Component", () => {
  test("renders header with logout button", () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/order system/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  test("dispatches logout and navigates to login on logout button click", async () => {
    const dispatchMock = jest.fn();
    jest
      .spyOn(require("react-redux"), "useDispatch")
      .mockReturnValue(dispatchMock);

    const navigateMock = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(navigateMock);

    render(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText(/logout/i));
    });

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(logout());
    expect(navigateMock).toHaveBeenCalledWith("/login");
  });
});
