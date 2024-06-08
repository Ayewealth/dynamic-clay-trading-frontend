import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
