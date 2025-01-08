import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/login";
import ItemsPage from "./pages/items/items";
import PrivateRoute from "./components/private-route";
import PublicRoute from "./components/public-route";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/items"
        element={
          <PrivateRoute>
            <ItemsPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
