import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CollectionPage from "./pages/CollectionPage";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/collection"
        element={
          <PrivateRoute>
            <Layout>
              <CollectionPage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Layout>
              <CartPage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
