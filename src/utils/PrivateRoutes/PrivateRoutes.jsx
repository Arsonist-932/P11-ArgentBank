import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  // Get Token in Storag
  const auth = localStorage.getItem("token") || sessionStorage.getItem("token");

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
