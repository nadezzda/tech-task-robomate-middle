import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/login/login";
import ItemsPage from "./pages/items/items";
import { useSelector } from "react-redux";
import { RootState } from "./features/store";

const App: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/items"
          element={isLoggedIn ? <ItemsPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
