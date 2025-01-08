import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
