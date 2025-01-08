import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  return isLoggedIn ? <Navigate to="/items" /> : children;
};

export default PublicRoute;
